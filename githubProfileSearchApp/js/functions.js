import * as v from "./variables.js";

export async function getUser(user) {
    const response = await fetch(v.apiUrl + user);
    const data = await response.json();

    if(!response.ok) {
        errorMessage("User not found, try another");
    } else {
        displayData(data);
        getRepos(user);
    }
}

export function errorMessage(msg) {
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = "none";    
    return v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`
}

function displayData(data) {
    const html = `
    <div class="profile">
        <img src="${data.avatar_url}" alt="${data/name}" class="img-thumbnail rounded-circle">
        <h2>${data.name}</h2>
        <p>${data.login}</p>
        <div class="d-grid">
            <a href="https://github.com/${data.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
        </div>
        <p class="pt-2">
            <span>${data.followers} Followers</span>
            <span>${data.following} following</span>
        </p>
        <p>${data.public_repos}</p>
        <p>
            <i class="fas fa-marker-alt"></i>
            ${data.location}
        </p>
    </div>
    `
    v.profile.innerHTML = html;
}

async function getRepos(user) {
    const response = await fetch(v.apiUrl + user +"/repos");
    const data = await response.json();

    displayRepos(data);

}

function displayRepos(repoData) {
    let repo_data = repoData.map((repo) => {
        return `
            <span class="repo border border-rounded p-3">
                <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
                <p>
                  <strong>Stars: ${repo.starazers_count} |</strong>
                  <strong>Watchers: ${repo.watchers_count} |</strong>
                  <strong>Forks: ${repo.forks_count}</strong>
                </p>
            </span>
        `
    })
    document.querySelector(".hide").style.display = "block";
    v.repos.innerHTML = repo_data.slice(0,8).join("");
}