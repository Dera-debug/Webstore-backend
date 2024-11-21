let products=[
    {
        id: 1001,
        title: "Mastering Algebra: Foundations and Beyond",
        subject:"Maths",
        description: "Dive into the world of algebra! This lesson covers essential concepts such as variables, equations, and functions. Perfect for beginners and those looking to strengthen their skills for advanced mathematics.",
        price: 100,
        image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        availableInventory: 10,
        location:"jos",
        rating: 2
    },
    {
        id: 1002,
        title: "Exploring the Basics of Chemistry",
        description: "Discover the fascinating principles of chemistry! This lesson introduces fundamental concepts including the periodic table, chemical reactions, and bonding, providing a solid foundation for future studies in science.",
        subject:"Sciences",
        price: 350,
        image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        availableInventory: 7,
        location:"kaduna",
        rating: 5
    },
    {
    id: 1003,
    title: "Introduction to World History: Ancient Civilisations",
    description: "Travel back in time to explore the rise and fall of ancient civilisations. From Mesopotamia to the Roman Empire, this lesson highlights key events, cultural achievements, and the impact of these societies on the modern world.",
    subject:"art",
    price: 50,
    image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 10,
    location:"jos",
    rating: 3
},
{
    id: 1004,
    title: "Creative Writing Workshop: Crafting Stories",
    subject:"art",
    description: "Unlock your imagination in this creative writing workshop! Learn techniques for character development, plot structure, and narrative style, and leave with a polished short story ready for sharing.",
    price: 70,
    image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 3,
    location:"jos",
    rating: 1
},
{
    id: 1005,
    title: "Foundations of Physics: Understanding Motion and Force",
    description: "Explore the fundamental concepts of physics that govern the world around us. This lesson covers topics such as Newton's laws of motion, gravity, and friction, designed for beginners eager to understand the physical universe.",
    subject:"maths",
    price: 400,
    image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 10,
    location:"kaduna",
    rating: 2
},
{
    id: 1006,
    title: "Introduction to Programming with JavaScript",
    description: "Start your coding journey with JavaScript! This lesson introduces programming fundamentals, including variables, loops, and functions, empowering you to create interactive web pages and applications.",
   subject:"IT",
    price: 350,
    image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 3,
    location:"jos",
    rating: 4
},
{
id: 1007,
title: "Visual Arts: Exploring Colour and Composition",
description: "Unleash your creativity in this visual arts lesson! Learn about colour theory, composition techniques, and the use of different mediums to create stunning artworks, regardless of your skill level.",
subject:"art",
price: 50,
image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
availableInventory: 10,
location:"kaduna",
rating: 3
},
{
id: 1008,
title: "Fundamentals of Economics: Supply and Demand",
description: "Gain a clear understanding of economic principles in this lesson on supply and demand. Discover how these forces shape markets, influence prices, and affect consumer behaviour, with real-world examples.",
subject:"Sciences",
price: 350,
image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
availableInventory: 3,
location:"jos",
rating: 1
},
{
    id: 1009,
    title: "Digital Design Essentials: From Idea to Execution",
    description: "Navigate the exciting world of digital design! This lesson covers the principles of graphic design, typography, and layout, guiding you from initial concepts to the final product using design software.",
    subject:"IT",
    price: 50,
    image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 0,
    location:"jos",
    rating: 2
},
{
    id: 1010,
    title: "Geography Essentials: Climate and Ecosystems",
    description: "Explore the Earth's diverse environments in this geography lesson! Learn about different climates, ecosystems, and their interconnections, gaining insights into global environmental issues and sustainability.",
    subject:"Sciences",
    price: 350,
    image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    availableInventory: 0,
    location:"kaduna",
    rating: 5
},

]