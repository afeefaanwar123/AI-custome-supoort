const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const tickets = [
    {
        id: 1,
        customer: "Ali",
        issue: "Payment failed",
        priority: "P1",
        sentiment: "Negative",
        category: "Payment",
        status: "Open"
    },

    {
        id: 2,
        customer: "Sara",
        issue: "Password reset",
        priority: "P2",
        sentiment: "Neutral",
        category: "Account",
        status: "Open"
    }
];
localStorage.setItem("tickets",JSON.stringify(tickets));
const savedtickets=JSON.parse(localStorage.getItem("tickets"));
console.log(savedtickets);
if (!currentUser) {
    window.location.href = "login.html";
    throw new Error("User is not logged in");
}

document.getElementById("userName").textContent = currentUser.name;
document.getElementById("userRole").textContent = currentUser.role;

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", handleLogout);

function handleLogout(){ 
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}

const ticketsContainer = document.getElementById("ticketsContainer"); 

tickets.forEach(ticket => { 
 
    const ticketcard = document.createElement("article"); 
 
   ticketcard.dataset.ticketId = ticket.id;
 
    ticketcard.innerHTML = ` 
        <h3>${ticket.customer}</h3> 
        <p>${ticket.issue}</p> 
        <p>Priority: ${ticket.priority}</p> 
        <p>Sentiment: ${ticket.sentiment}</p> 
        <p>Category: ${ticket.category}</p> 
        <p>Status: ${ticket.status}</p> 
        <button>View Ticket</button> 
    `; 
 
    const viewButton = ticketcard.querySelector("button"); 
 
    viewButton.addEventListener("click", () => { 
 
        alert(` 
Ticket ID: ${ticket.id} 
Customer: ${ticket.customer} 
Issue: ${ticket.issue} 
Priority: ${ticket.priority} 
Sentiment: ${ticket.sentiment} 
Category: ${ticket.category} 
Status: ${ticket.status} 
`); 
 
    }); 
 
    ticketsContainer.append(ticketcard); 
}); 



const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("input", () => {

    const searchtext = searchinput.value.toLowerCase();

    tickets.forEach(ticket => {

        const ticketcard = document.querySelector(
            `[data-ticket-id="${ticket.id}"]`
        );

        const ticketText = `     ${ticket.id}   ${ticket.customer}
            ${ticket.issue}
            ${ticket.priority}
            ${ticket.sentiment}
            ${ticket.category}
            ${ticket.status}
        `.toLowerCase();

        if (ticketText.includes(searchtext)) {
            ticketcard.style.display = "block";
        } else {
            ticketcard.style.display = "none";
        }

    });
});

const priorityFilter = document.getElementById("priorityFilter"); 
 
priorityFilter.addEventListener("change", () => { 

    const priorittext = priorityFilter.value; 

    tickets.forEach(ticket => { 

        const ticketcard = document.querySelector(
            `[data-ticket-id="${ticket.id}"]`
        ); 

        if (priorittext === "" || ticket.priority === priorittext) { 
            ticketcard.style.display = "block"; 
        } else { 
            ticketcard.style.display = "none"; 
        }   }); 
});


const statusFilter = document.getElementById("statusFilter");

statusFilter.addEventListener("change", () => {

    const statustext = statusFilter.value;

    tickets.forEach(ticket => {

        const ticketcard = document.querySelector(
            `[data-ticket-id="${ticket.id}"]`
        );

        if (statustext === "" || ticket.status === statustext) {
            ticketcard.style.display = "block";
        } else {
            ticketcard.style.display = "none";
        }

    });

});

const totalTickets = document.getElementById("totalTickets");

totalTickets.textContent = tickets.length;
const openTickets = document.getElementById("openTickets");

let openticketcount = 0;

tickets.forEach(ticket => {

    if (ticket.status === "Open") {
        openticketcount++;
    }

});

openTickets.textContent = openticketcount;
const urgentTickets = document.getElementById("urgentTickets");

let urgentticketcount = 0;

tickets.forEach(ticket => {

    if (ticket.priority === "P1") {
        urgentticketcount++;
    }

});

urgentTickets.textContent = urgentticketcount;
