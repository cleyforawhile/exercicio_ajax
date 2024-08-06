document.addEventListener('DOMContentLoaded', async function() {
    const username = 'cleyforawhile';
    const elements = {
        name: document.getElementById('name'),
        username: document.getElementById('username'),
        avatar: document.getElementById('avatar'),
        repos: document.getElementById('repos'),
        followers: document.getElementById('followers'),
        following: document.getElementById('following'),
        link: document.getElementById('link')
    };

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Erro ao buscar dados do GitHub');
        
        const data = await response.json();
        elements.name.textContent = data.name || 'Cley';
        elements.username.textContent = `@${data.login}`;
        elements.avatar.src = data.avatar_url;
        elements.repos.textContent = data.public_repos;
        elements.followers.textContent = data.followers;
        elements.following.textContent = data.following;
        elements.link.href = data.html_url;
    } catch (error) {
        console.error('Erro:', error);
    }
});
