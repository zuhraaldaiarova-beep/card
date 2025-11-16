let html_div=document.createElement("div")
html_div.className="block"
document.body.append(html_div)

let html_img=document.createElement("img")
html_img.className="img"
html_img.src="https://img.freepik.com/premium-vector/vector-flat-illustration-black-color-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-861.jpg?w=2000"
html_div.append(html_img)

let html_h1=document.createElement("h1")
html_h1.innerText="Aldaiarova Zuhra"
html_div.append(html_h1)

let html_p=document.createElement("p")
html_p.innerText="Frontend Developer"
html_div.append(html_p)

let html_button=document.createElement("button")
html_button.innerText="Click me"
html_div.append(html_button)