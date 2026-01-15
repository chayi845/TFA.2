// Sample data - you can modify this
const teams = [
    { name: "Team 1", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { name: "Team 2", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { name: "Team 3", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { name: "Team 4", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { name: "Team 5", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 },
    { name: "Team 6", played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 }
];

const fixtures = [
    { id: 1, home: "Team 1", away: "Team 2", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" },
    { id: 2, home: "Team 3", away: "Team 4", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" },
    { id: 3, home: "Team 5", away: "Team 6", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" },
    { id: 4, home: "Team 1", away: "Team 3", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" },
    { id: 5, home: "Team 2", away: "Team 5", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" },
    { id: 6, home: "Team 4", away: "Team 6", homeScore: null, awayScore: null, status: "Upcoming", date: "10-02-2026" }
];

const players = [
    { name: "Player 1", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 2", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 3", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 4", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 5", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 6", team: "Team 1", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },

    { name: "Player 7", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 8", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 9", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 10", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 11", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 12", team: "Team 2", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },

    { name: "Player 13", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 14", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 15", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 16", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 17", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 18", team: "Team 3", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },

    { name: "Player 19", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 20", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 21", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 22", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 23", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 24", team: "Team 4", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },

    { name: "Player 25", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 26", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 27", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 28", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 29", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 30", team: "Team 5", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },

    { name: "Player 31", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 32", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 33", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 34", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 35", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 },
    { name: "Player 36", team: "Team 6", goals: 0, assists: 0, yellow: 0, red: 0, matches: 0 }
];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}

function renderStandings() {
    const sorted = teams.map((t, i) => ({
        ...t,
        gd: t.gf - t.ga,
        pts: t.won * 3 + t.drawn
    })).sort((a, b) => b.pts - a.pts || b.gd - a.gd);

    const html = sorted.map((team, i) => `
                <tr>
                    <td><span class="position">${i + 1}</span></td>
                    <td class="team-name">${team.name}</td>
                    <td>${team.played}</td>
                    <td>${team.won}</td>
                    <td>${team.drawn}</td>
                    <td>${team.lost}</td>
                    <td>${team.gf}</td>
                    <td>${team.ga}</td>
                    <td>${team.gd > 0 ? '+' : ''}${team.gd}</td>
                    <td><strong>${team.pts}</strong></td>
                </tr>
            `).join('');
    document.getElementById('standingsTable').innerHTML = html;
}

function renderPlayers() {
    const teamFilter = document.getElementById('teamFilter');
    const uniqueTeams = [...new Set(players.map(p => p.team))];
    teamFilter.innerHTML = '<option value="all">All Teams</option>' +
        uniqueTeams.map(t => `<option value="${t}">${t}</option>`).join('');
}

function filterPlayers() {
    const filter = document.getElementById('teamFilter').value;
    const filtered = filter === 'all' ? players : players.filter(p => p.team === filter);

    const html = filtered.map(p => `
                <tr>
                    <td class="team-name">${p.name}</td>
                    <td>${p.team}</td>
                    <td class="goals">${p.goals}</td>
                    <td>${p.assists}</td>
                    <td>${p.yellow > 0 ? `<span class="yellow-card">⚠ ${p.yellow}</span>` : '-'}</td>
                    <td>${p.red > 0 ? `<span class="red-card">🟥 ${p.red}</span>` : '-'}</td>
                    <td>${p.matches}</td>
                </tr>
            `).join('');
    document.getElementById('playersTable').innerHTML = html;
}

function renderTopScorers() {
    const sorted = [...players].sort((a, b) => b.goals - a.goals || b.assists - a.assists);
    const topScorer = sorted[0];
    const topAssister = [...players].sort((a, b) => b.assists - a.assists)[0];
    const totalGoals = players.reduce((sum, p) => sum + p.goals, 0);

    document.getElementById('topScorer').textContent = topScorer.name;
    document.getElementById('topScorerGoals').textContent = `${topScorer.goals} goals`;
    document.getElementById('topAssist').textContent = topAssister.name;
    document.getElementById('topAssistCount').textContent = `${topAssister.assists} assists`;
    document.getElementById('totalGoals').textContent = totalGoals;

    const html = sorted.slice(0, 10).map((p, i) => `
                <tr>
                    <td><span class="position">${i + 1}</span></td>
                    <td class="team-name">${p.name}</td>
                    <td>${p.team}</td>
                    <td class="goals">${p.goals}</td>
                    <td>${p.assists}</td>
                </tr>
            `).join('');
    document.getElementById('scorersTable').innerHTML = html;
}

function renderFixtures() {
    const html = fixtures.map(match => {
        const isFinished = match.status === "Finished";
        const scoreDisplay = isFinished
            ? `<span class="score">${match.homeScore} - ${match.awayScore}</span>`
            : `<span class="vs">vs</span>`;

        return `
        <div class="match-card">
            <div class="match-date">${match.date} <span class="match-status ${isFinished ? 'finished' : 'upcoming'}">${match.status}</span></div>
            <div class="match-teams">
                <div class="team-home">${match.home}</div>
                <div class="match-score-container">${scoreDisplay}</div>
                <div class="team-away">${match.away}</div>
            </div>
        </div>
        `;
    }).join('');
    document.getElementById('fixturesList').innerHTML = html;
}

// Initialize
// Initialize
renderStandings();
renderPlayers();
filterPlayers();
renderTopScorers();
renderFixtures();