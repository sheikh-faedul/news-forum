const loadData =async ()=>{
    const res =await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data =await res.json();
    const discuss = (data.posts);
    displayDisucuss(discuss);
}
const displayDisucuss = (discusses)=>{
    const discussionArea = document.getElementById('discussion');
    
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
                          <h2 class="card-title">${discusses.title}</h2>
                          <p> ${discusses.description}</p>
                          <hr>
                          <div class="card-actions flex justify-around ">
                            <div class="flex gap-4">
                                <h6>sms${discusses.comment_count}</h6>
                                <h6>view${discusses.view_count}</h6>
                                <h6>time${discusses.posted_time}</h6>
                            </div>
                            <button class="btn btn-primary">Mark as read</button>
                          </div>
                        </div>
                        </div>
                         
        `
        
        discussionArea.appendChild(discussCard);
       
    });
   
}

const loadPost =async()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  displayPost(data);
}
const displayPost = (post)=>{
 post.forEach(post => {
    console.log(post);
 });
}

loadData();
loadPost();