import { UseMilligram } from "./millilib"

const leaderboardAPI = [
    {
        team: "Team 1",
        members: "John Doe1, Jane Doe2",
        score: 100,
        entries: 10,
        last: "2017-01-01 12:00:00"
    },
    {
        team: "Team 2",
        members: "John Doe3, Jane Doe4",
        score: 90,
        entries: 9,
        last: "2017-01-01 12:00:00"
    },
    {
        team: "Team 3",
        members: "John Doe5, Jane Doe6",
        score: 80,
        entries: 8,
        last: "2017-01-01 12:00:00"
    }
]


export function leaderboardHTML() {
    return leaderboardAPI.map((team) => {
        return (
            <tr>
                <td>{team.team}</td>
                <td>{team.members}</td>
                <td>{team.score}</td>
                <td>{team.entries}</td>
                <td>{team.last}</td>
            </tr>
        )
    }
    )
}

export function Leaderboard1() {
    return (    <div style={{ width: "80%", margin: "auto", padding: "80px 0px 0px 0px" }}>
        <UseMilligram />
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Members</th>
                    <th>Score</th>
                    <th>Entries</th>
                    <th>Last</th>
                </tr>
            </thead>
            <tbody>
                {leaderboardHTML()}
            </tbody>
        </table>
    </div>
    )
}
