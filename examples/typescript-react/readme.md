To run the project:
`npm i` => `npm run dev`

This was quite a fun task for me. I've never worked with React class components before => I first made it work
using the provided todoItem component, I then decided to rewrite the todoItem component to a functional component.

I was bothered by not having an apparent way to restart the server and the browser on changes I made.
Since I have never done this manually (I've always used CRA or Next) I started looking first into how to make this work
with browserify but then decided to give webpack a try, since I've always wanted to learn a bit more about it.

I didn't get to test any components because I was having trouble with setting up Jest and React testing library to work
with the setup that I made. I have used RTL in the past though.

For styling I've used React's inline CSS.

I know the task didn't require me to setup webpack or anything like that, but this is what I felt like I needed and I also got to learn something in the process.


#### What would you do differently?
        avoid using class components, use const|let instead of var,
        mobile view first, use react hooks, use tailwind or styled components, use folders to separate files
#### What's good?
        trimming the value, utils folder, naming consistency, saving todos to local storage, types
#### What's bad?
        not updated dependencies, no responsive designs, node modules included in git,
        unused parameters, no eslint, px instead of rem, imports with *, using any as type, hard to read, react components
		should have capitalized titles
#### Are you missing anything in the tooling department?
        linter, react testing library, jest, bundler, reload


![image](https://user-images.githubusercontent.com/9266906/153768528-8384de6b-8486-406f-9a22-de79abf010d2.png)

