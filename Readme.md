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

## For further working on same project:

1. After you make any changes, you will see M in vscode for the modified files.
2. To add modified files: git add ., the M symbol will still show up , until you commit.
3. To commit use : git commit -m <message>
4. Push the change to remote repository on github: git push OR git push origin <branch_name>

Branching:

1. A branch is a copy of your repository at the given point in time.
2. You can create a branch with: git branch <branchname> , branch name should not have space and give a meaning ful short name
3. To see list of branches: git branch , here in the list the one which has the \* at the left the current branch that you are in.
4. To go to the created branch: git checkout <branchname>
