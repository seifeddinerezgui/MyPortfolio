import{A as e}from"./UIcon.9e407758.js";const p=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function u(a,...o){const r=Object.assign({},a);return Object.keys(r).forEach(s=>{o.includes(s)&&delete r[s]}),r}const n=a=>a,d=[n({name:"Programming Languages",slug:"pro-lang"}),n({name:"Frameworks",slug:"framework"}),n({name:"Libraries",slug:"library"}),n({name:"Langauges",slug:"lang"}),n({name:"Databases",slug:"db"}),n({name:"ORMs",slug:"orm"}),n({name:"DevOps",slug:"devops"}),n({name:"Testing",slug:"test"}),n({name:"Dev Tools",slug:"devtools"}),n({name:"Markup & Style",slug:"markup-style"}),n({name:"Design",slug:"design"}),n({name:"Soft Skills",slug:"soft"})],t=a=>{const o=u(a,"category");return a.category&&(o.category=d.find(r=>r.slug===a.category)),o},c=[t({slug:"js",color:"yellow",description:"JavaScript is a versatile programming language commonly used in web development to create interactive effects within web browsers.",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),t({slug:"ts",color:"blue",description:"TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It is designed for developing large applications and transcompiles to JavaScript.",logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),t({slug:"py",color:"blue",description:"python .",logo:e.Python,name:"Python",category:"pro-lang"}),t({slug:"symfony",color:"white",description:"symfony .",logo:e.Symfony,name:"Symfony",category:"framework"}),t({slug:"php",color:"purple",description:"php .",logo:e.Php,name:"php",category:"pro-lang"}),t({slug:"css",color:"blue",description:"CSS (Cascading Style Sheets) is used to design and control the layout of web pages, ensuring they look attractive and function smoothly across different devices.",logo:e.CSS,name:"CSS",category:"markup-style"}),t({slug:"html",color:"orange",description:"HTML (Hypertext Markup Language) is the standard markup language used to create and structure content on the web.",logo:e.HTML,name:"HTML",category:"markup-style"}),t({slug:"sass",color:"pink",description:"Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS, adding power and elegance to the basic language.",logo:e.Sass,name:"Sass",category:"markup-style"}),t({slug:"reactjs",color:"cyan",description:"React is a JavaScript library for building user interfaces, particularly single-page applications, by using a component-based architecture.",logo:e.ReactJs,name:"React Js",category:"library"}),t({slug:"svelte",color:"orange",description:p,logo:e.Svelte,name:"Svelte",category:"library"}),t({slug:"angular",color:"red",description:"Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.",logo:e.Angular,name:"Angular",category:"framework"}),t({slug:"springboot",color:"green",description:"Spring Boot is an open-source, microservice-based Java web framework that provides a robust infrastructure for developing and deploying enterprise applications.",logo:e.springboot,name:"Spring Boot",category:"framework"}),t({slug:"mysql",color:"blue",description:"MySQL is an open-source relational database management system based on SQL (Structured Query Language), widely used for managing data in web applications.",logo:e.mysql,name:"MySQL",category:"db"})],y="Skills",h=(...a)=>c.filter(o=>a.includes(o.slug)),f=a=>{const o=[],r=[];return c.forEach(s=>{if(a.trim()&&!s.name.toLowerCase().includes(a.trim().toLowerCase()))return;if(!s.category){r.push(s);return}let i=o.find(g=>{var l;return g.category.slug===((l=s.category)==null?void 0:l.slug)});i||(i={items:[],category:s.category},o.push(i)),i.items.push(s)}),r.length!==0&&o.push({category:{name:"Others",slug:"others"},items:r}),o};export{f as a,h as g,c as i,y as t};
