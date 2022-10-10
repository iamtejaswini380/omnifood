# Command to convert scss to css

npx sass ./css/style.scss ./css/style.css

.header {
position: fixed;
width: 100%;
hight: 80px;
background-color: $white;
box-shadow: 0 12px 32px rgb(0 0 0 / 6%);
}

# commands to set up new reposotory in github

## For any new project set up with github:

1. Create the respository on github , either private or public.
2. Go to your root directory on local machine and run: git init
3. Rename the master branch to main: git branch -m main, this will rename your default branch to master. Now as we have already set up the default name to main globally so next time you dont have to do it. [ No needed in future for any projects]
4. Add all your files : git add .
5. Comming the added files with a commit message: git commit -m <message> , ex: git commit -m 'initial commit'
6. Connect the local folder to remote repository url: git remove add origin <url of the git repo>
   ex: git remote add origin https://github.com/iamtejaswini380/omnifood.git
7. git push -u origin main <-- push all commits with unrelated change , as this is first push to remote so there are no history for guthub , that is why we are using -u.

## For existing project:

1. git clone https://github.com/iamtejaswini380/omnifood.git
