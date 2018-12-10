//Init Github
const github = new Github;

const uis = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {

    const userText = e.target.value;

    if(userText !== ''){
 
       github.getUser(userText).then(data =>{
          // console.log(data);
          if(data.profile.message === 'Not found'){
              // Show alert
            uis.showAlert('User not found', 'alert alert-danger');
          }else{
              // show profile 
              uis.showProfile(data.profile);
              uis.showRepos(data.repos);
          }
       })
    }else{
        // Clear Profile
        uis.clearProfile();
    }
});