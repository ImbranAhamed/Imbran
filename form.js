const get = document.querySelector("#get");
//GET request
function getPost(e) {
    const id = document.querySelector("#id").value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => { return response.json(); })
        .then((post) => {
            const sec = document.createElement("section");
            for (let key in post) {
                sec.innerHTML += `
                <p><b>${key}:</b> ${post[key]}<p>
            `;
            }
            sec.className = "container-lg mt-5 p-5";
            document.body.append(sec);
        })

    document.querySelector("form").reset();
}


get.addEventListener("click", getPost);


//GET request
const getAll = document.querySelector("#getAll");

function getAllPost() {
    const hold = document.querySelector(".hold");
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => { return response.json(); })
        .then((posts) => {
            posts.forEach((post) => {
                const sec = document.createElement("sec");
                sec.className = "col-12 mt-5 p-5"

                for (let key in post) {
                    sec.innerHTML += `<p><b>${key}:</b> ${post[key]}<p>`;
                }
                hold.append(sec);
            });
        });
}

getAll.addEventListener("click", getAllPost);


const create = document.querySelector("#create");
// POST request
function createPost() {
    const id = document.querySelector("#id").value;
    const title = document.querySelector("title").value;
    const body = document.querySelector("#body").value;
    const userid = document.querySelector("#userid").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: `${title}`,
            body: `${body}`,
            userId: `${userid}`,
        }),

        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    })
        .then((response) => {
            if (response.ok) {
                alert("Post Submitted");
            }
            else {
                alert("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

create.addEventListener("click", createPost);

const update = document.querySelector("#update");
//PUT request
function updatePost() {
    const id = document.querySelector("#id").value;
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
    const userid = document.querySelector("#userid").value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            id: `${id}`,
            title: `${title}`,
            body: `${body}`,
            userId: `${userid}`,
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
    })
        .then((response) => {
            if (response.ok) {
                alert("Post edited");
            }
            else {
                alert("Something went wrong");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}

update.addEventListener("click", updatePost);


const dlt = document.querySelector("#delete");
//DELETE request
function deletePost() {
    if (confirm("Are you sure want to delete this Post ?")) {
        const id = document.querySelector("#id");
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Post deleted");
                }
                else {
                    alert("Something went wrong")
                }
                return response.json();
            })
            .then((data)=>{
                console.log(data);
            })
    }
    else{
        return;
    }


}

dlt.addEventListener("click", deletePost);
