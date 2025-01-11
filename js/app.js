const loadData =async (searchField)=>{
  const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchField}`);
    const data =await res.json();
    const discuss = (data.posts);
    displayDisucuss(discuss);
}
const displayDisucuss = (discusses)=>{
    const discussionArea = document.getElementById('discussion');
    discussionArea.textContent='';
    discusses.forEach(discusses => {
       const discussCard = document.createElement('div')
      
       discussCard.classList='flex flex-col';
       discussCard.innerHTML =`
                        <div class="flex flex-col lg:flex-row my-4">
                        <div> 
                             <figure>
                                <img
                                    src="${discusses.image}"
                                    alt="Movie" />
                             </figure>
                        </div>
                             <div class="card-body">
                         <h4>${discusses.category}</h4>
                         <h4>Author:${discusses.author.name}</h4>
                          <h2 id="title" class="card-title">${discusses.title}</h2>
                          <p> ${discusses.description}</p>
                          <hr>
                          <div class="card-actions flex justify-around ">
                            <div class="flex gap-4">
                                <h6>sms${discusses.comment_count}</h6>
                                <h6 id="view">view${discusses.view_count}</h6>
                                <h6>time${discusses.posted_time}</h6>
                            </div>
                            <button onclick="marked()" class="btn btn-primary">Mark as read</button>
                          </div>
                        </div>
                        </div>
                         
        `
        
        discussionArea.appendChild(discussCard);
        
    });
    loadigSpinner(false);
}

const loadPost =async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  displayPost(data);
}
const displayPost = (post)=>{
  const latestPost = document.getElementById('postArea');
 post.forEach(post => {
    const postCard = document.createElement('div');
     
    postCard.innerHTML=`
        <div class = "flex">
                        <div class="card bg-base-100 w-96 shadow-xl">
                            <figure>
                              <img
                                src="${post.cover_image} "
                                alt="Shoes" />
                            </figure>
                            <div class="card-body">
                              <h4>Date: ${post.author?.posted_date}</h4>
                                <h2 class="card-title">${post.title}</h2>
                                <p>${post.description} </p>
                              </div>
                              <div class="flex mx-8">
                                 <div>
                                    <img src="${post.profile_image}" alt="" srcset="">
                                 </div>
                                <div>
                                    <h2>Author:${post.author.name}</h2>
                                    <p>Designatio:${post.author?.designation}</p>
                                </div>
                              </div>
                          </div>
                    </div>
    `
    latestPost.appendChild(postCard);
 });
}

const searchButton = ()=>{
  loadigSpinner(true);
  const searchField = document.getElementById('search-field').value;
  loadData(searchField);
}

const loadigSpinner = (isLoading)=>{
  const spinner = document.getElementById('loading-spinner');
  if(isLoading){
    spinner.classList.remove('hidden');
  }
  else{
    spinner.classList.add('hidden');
  }
}


const marked=()=>{
const markContainer = document.getElementById('markedArea');
const div = document.createElement('div');
div.classList.add("flex");
div.classList.add("gap-6");

const tittle= document.getElementById('title').innerText;
const views=document.getElementById('view').innerText;

const h1 = document.createElement('h4');
const h2 = document.createElement('h6');

h1.innerText= tittle;
h2.innerText= views;

div.appendChild(h1);
div.appendChild(h2);
markContainer.appendChild(div);

const marks = getConvertedValue('marks');
document.getElementById('marks').innerText=marks+1;


}

const getConvertedValue=(id)=>{
  const value=document.getElementById(id).innerText;
  const convertedValue =parseInt(value);
  return convertedValue;
}
 
loadPost();