## City Innovate Form Builder 
This app was created using React and Material UI (MUI). 
What you can do: 
- login (there is no user auth for the login page for this assignment) 
- add a form title and description 
- add questions
- edit finished questions
- change the question type. The question types are text, multiple choice, and checkbox 
- edit the question and multiple choice or checkbox options 
- remove multiple choice and checkbox options 
- delete questions 

What you can't do: 
- add different media types 
- drag and drop 

### Installation 
React version -- 18.2.0

Clone the front-end and run

npm install
npm start

### Notes
I chose to focus on the main functionality of adding and removing questions, changing question types and editing questions.If I were building this out in a work environnment, that would likely be the MVP. Once the main structure of being able to add questions and change to a couple of different types was in place, adding new question types, media types, and drag and drop functionality would make sense as pieces to build and release incrementally

I used Material UI (MUI), which is a popular component library, for this assignment as it offers some easy to use pre-built components and icons which allowed me to focus on building out the main functionality of the app while easily maintaining a consistent UI. MUI is somewhat opinionated so if you need a very customized look and feel, it may make more sense to build the components yourself or use a library that offers more flexiblity.

### Bugs/Things to Fix 
- the question title and description form currently has some funky sizing on larger screens.
- when you add an option to a question it automatically generates an option name which you then need to go back and edit 

### Screenshots 


<img width="1439" alt="Screen Shot 2022-08-05 at 3 41 18 PM" src="https://user-images.githubusercontent.com/62389500/183221409-4d006f6d-8769-437f-90ca-383d01b0ca21.png">

<img width="1133" alt="Screen Shot 2022-08-05 at 3 41 10 PM" src="https://user-images.githubusercontent.com/62389500/183221413-85d9be70-430c-4803-816f-2641e231bfe0.png">

<img width="1431" alt="Screen Shot 2022-08-05 at 3 40 37 PM" src="https://user-images.githubusercontent.com/62389500/183221419-cd21d98f-abee-4bb2-937c-f0767df185d3.png">

### Thoughts on CSS Conventions 
#### BEM (Block Element Modifier)
- Block represents a high-level container like a navigation menu or so a card container 
Element is the next element inside the block which represents a singular unit inside the block. This could be like the links in the nav menu or the title of a card 
- The modifier is a state or variation to which an element is likely to transform. For example, the text could transform to bold or underlined 
- Advantages:
    - It has well-defined naming conventions which are good for quickly understanding where a class sits within the UI architecture 
    - Since block styles aren't dependent on other elements on a page, you avoid problems from cascading
    - If blocks are composed well they are easy to reuse which reduces the amount of CSS that you have to maintain 
- Disadvantages 
    - The long naming structure means that the HTML can become a bit bloated and complex to read 
  - Can be very verbose with too many classes and requires a lot of thought to name things well 

#### OOCSS (Object Oriented CSS)
- Separate Structure and Skin.
    - Structure is the layout aspects like width, height, and margin. Skin is the styling aspect or the visual features like background and border. So for        a particular object, create two different classes targetting structure and skin and then use both of them to eventually style the object 
- Separate Container and Content.
    - The container (parent) should not affect the appearance of a particular object, i.e., the object should not inherit styles. 
- Advantages: 
    - Cutting down on repetition helps applications run faster
    - When done well, multiple devs working on the project can reuse what their peers have already abstracted out
    - OOCSS cuts down on deeply nested selectors
- Disadvantages: 
    - If you don't have a large number of repeating visual patterns in your code, applying OOCSS may be impractical.

#### SMACSS (Scalable and Modular Architecture for CSS) 
- Focuses on five categories for its rules: 
    - the Base is used for defaults like Html or body. 
    - Layout divides a page into sections with elements like header and footer, 
    - A module is a reusable, modular element in the design. This is usually the majority of your elements. 
    - State is used for the possible variations for each element like expanded or hidden. 
    - Theme is similar to state but it defines how the modules and layouts will look 
- Advantages: 
    - Less prescriptive than BEM which allows flexibility in how you name your elements 
    - Ease of reading - it is less verbose than BEM and relatively easy to document for other developers. 
    - Website performance. HTML files are larger but the smaller stylesheets leads to faster downloading of those resources. 
-Disadvantages
    - Easy to fall into the trap of viewing everything as a module. It takes a while to get used to the categories 
#### Tailwind 
 - Tailwind provides a series of pre-written classes to work with. These classes are utility CSS, meaning many small, single-purpose classes that are assembled en masse to create an overall visual effect.
- Advantages: 
    - Utility CSS classes are easy to toggle and manage via JavaScript.
    - Instead of declaring lots of BEM classes that you reuse, you just style each element independently using utility classes, like bg-white for a white       background or text-lg for 18px font.
    - Because you describe how something looks rather than what it is, you avoid the classic “naming things” problem.
 
- Disadvantages: 
    - You need to learn Tailwind class names in addition to learning CSS property names to figure out the visual styling you want.
    - Tailwind works best when there’s a component system present. Without this kind of abstraction, it becomes difficult to keep component instances             consistent.
    - Can violate the DRY principle if you don’t write small, reusable components 
   -  Tailwind needs a build tool to work,


I’m less familiar with the followingmbut it’s worth noting that it exists. 
#### ITCSS (Inverted Triangle CSS)
Involves visualizing your CSS as a layered, upside-down triangle. It organizes CSS files with layers starting from generic, at the top, to explicit, at the bottom,  and from low to high specificity. 
To my understanding, it’s well suited for large projects and can work well with other conventions like BEM



