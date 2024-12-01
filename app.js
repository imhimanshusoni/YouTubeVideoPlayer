const videoData = [
  {
    time: "15:59",
    status: "Now playing",
    title: "Tier 3 College to Amazon | Bhoomika Breaks The Code",
    views: 162,
    timeAgo: "15 hours ago",
    thumbnail:
      "https://i.ytimg.com/vi/r4JJTavrGow/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW4ZnDl1U8OOr3f69ldLTpvEp-fA",
    iframesrc: "https://www.youtube.com/embed/r4JJTavrGow?si=IRWZifMCKK1rBWqf",
  },
  {
    time: "8:50",
    status: "Now playing",
    title: "Dynamic Programming | Stairs Case Problem | L-107",
    views: 17,
    timeAgo: "18 hours ago",
    thumbnail:
      "https://i.ytimg.com/vi/2tuSxX2Zy4k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAt2bPf0Tz0T7fMGE0U6ULQRBz7RA",
    iframesrc: "https://www.youtube.com/embed/2tuSxX2Zy4k?si=ddkt3bWGna5nEzW5",
  },
  {
    time: "23:57",
    status: "Now playing",
    title: "Understanding Dynamic Programming by Fibonacci Series | L-106",
    views: 49,
    timeAgo: "1 day ago",
    thumbnail:
      "https://i.ytimg.com/vi/QSHT-JZWHxk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkShhKGl1R5d6Cg2aPsmCFpSI57A",
    iframesrc: "https://www.youtube.com/embed/QSHT-JZWHxk?si=eFoB2nL56lpfSne6",
  },
  {
    time: "24:01",
    status: "Now playing",
    title:
      "Dynamic Programming Introduction | Key Concepts and Techniques | L-105",
    views: 258,
    timeAgo: "2 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/QSHT-JZWHxk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkShhKGl1R5d6Cg2aPsmCFpSI57A",
    iframesrc: "https://www.youtube.com/embed/QBRbho1fuaA?si=NJ8z3a618BVAXXQ3",
  },
  {
    time: "9:27",
    status: "Now playing",
    title: "Graph | Cycle Detection in Undirected Graph | L-104",
    views: 114,
    timeAgo: "3 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/vI_cJTIMmSM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfK5yqeEBr_QsX1It2fMTN3Fqzjw",
    iframesrc: "https://www.youtube.com/embed/vI_cJTIMmSM?si=jC-mNOI3av0GNeJo",
  },
  {
    time: "17:42",
    status: "Now playing",
    title: "Graph | BFS on Graph(Breadth-First Search) | L-103",
    views: 127,
    timeAgo: "4 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/vR0JBiQMV0g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbUOyCNUHxPSNNgC6Cg4LqDap5-w",
    iframesrc: "https://www.youtube.com/embed/vR0JBiQMV0g?si=1DnR0nwIaX0Jplqs",
  },
  {
    time: "7:01",
    status: "Now playing",
    title: "Perfect Roadmap For Low Level Design Interviews",
    views: 479,
    timeAgo: "4 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/tT8LjYdbKUo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsWdd9prw07yl0PWYHmixDV5fYOg",
    iframesrc: "https://www.youtube.com/embed/tT8LjYdbKUo?si=WlzDczFYhxaNsqRv",
  },
  {
    time: "13:17",
    status: "Now playing",
    title: "Graph | Count the No of Island | LeetCode - 200(Medium) | L-102",
    views: 51,
    timeAgo: "5 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/6mSpg4KnaU8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeQ2y4gX8RG3glHV1MU2_tDlYNMg",
    iframesrc: "https://www.youtube.com/embed/6mSpg4KnaU8?si=1-3DW9KB_uIZ1qJl",
  },
  {
    time: "24:24",
    status: "Now playing",
    title:
      "Graph | DFS On Graph (Depth First Search ) | Count connected node of Graph | L-101",
    views: 44,
    timeAgo: "6 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/eayIfvahAMM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaLWx0UkPCeoMqtISWT88k5wzekQ",
    iframesrc: "https://www.youtube.com/embed/eayIfvahAMM?si=qv4HPa-OyBoaX_0j",
  },
  {
    time: "15:53",
    status: "Now playing",
    title:
      "Graph | Representation of Graph | Adjacency List | Adjacency Matrix | L-100",
    views: 84,
    timeAgo: "7 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/nCPWDbRkDvU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpOFzfX-rwlXYSfDp1lUOeUyGyNg",
    iframesrc: "https://www.youtube.com/embed/nCPWDbRkDvU?si=x1L3MDlM3Qo8-nrl",
  },
  {
    time: "32:23",
    status: "Now playing",
    title: "Graph | Introduction to Graph | Master Graph Terminology | L-99",
    views: 80,
    timeAgo: "8 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/69K2PKLLs_Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABj6hrKVypJivn5dZLNMnApDsvNg",
    iframesrc: "https://www.youtube.com/embed/69K2PKLLs_Q?si=Q2Ze3G8VuNI-p5Ee",
  },
  {
    time: "34:56",
    status: "Now playing",
    title:
      "Backtracking | N-Queen Problem | LeetCode -51 (Hard Problem) | L-98",
    views: 109,
    timeAgo: "9 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/Y9b2V4EezHo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMx5-cUMd1-9WBr3S6B0WCe8ooLA",
    iframesrc: "https://www.youtube.com/embed/Y9b2V4EezHo?si=x19ifY49DuM2Ia1V",
  },
  {
    time: "33:38",
    status: "Now playing",
    title:
      "Backtracking | Count Number of Different Path | Leet code - 980 (Hard Problem) | L-97",
    views: 45,
    timeAgo: "10 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/P6JRL0nputI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZyG-noeRE8P4YURr4VIG9cC12YQ",
    iframesrc: "https://www.youtube.com/embed/P6JRL0nputI?si=KAjZX46aY0hJrl2O",
  },
  {
    time: "32:23",
    status: "Now playing",
    title: "Backtracking | Rat in Maze Problem | L-96",
    views: 49,
    timeAgo: "11 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/T1bFHiBgBac/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBstCpbUlhxUq4mkWdvx5nGY8YOIQ",
    iframesrc: "https://www.youtube.com/embed/T1bFHiBgBac?si=A5XQkZKMb5if07qU",
  },
  {
    time: "15:52",
    status: "Now playing",
    title: "Backtracking | Print all the Subset of Set | L-95",
    views: 73,
    timeAgo: "12 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/lvWBucZlvd8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqpmK3fpbNoVnpG0a3pyf-NxaP5w",
    iframesrc: "https://www.youtube.com/embed/lvWBucZlvd8?si=z1Un_SjtHqMrfDw9",
  },
  {
    time: "20:00",
    status: "Now playing",
    title:
      "Backtracking | Generate All Unique Permutations of a String with Duplicate Characters | L-94",
    views: 94,
    timeAgo: "13 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/Y7T2amf3xb8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkhaCBTEgFgrerjcFkEdvCRWqOTA",
    iframesrc: "https://www.youtube.com/embed/Y7T2amf3xb8?si=94k2lEzA6xb0J2-S",
  },
  {
    time: "43:31",
    status: "Now playing",
    title:
      "Unlock Success in Low Level Design Interviews with Vivekanand Vivek",
    views: 357,
    timeAgo: "13 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/KinZ1KRPJtE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjuUsap6t-O-PVzSLDqkLY_BDovw",
    iframesrc: "https://www.youtube.com/embed/KinZ1KRPJtE?si=2rihhWerAvPtf4A1",
  },
  {
    time: "45:17",
    status: "Now playing",
    title: "Backtracking | Generate all Permutation of String | L-93",
    views: 143,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/4xufJqcQRIY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-_-xUpGM82plofPidNkjHWMBUMQ",
    iframesrc: "https://www.youtube.com/embed/4xufJqcQRIY?si=VSpat6mubIvxshLJ",
  },
  {
    time: "23:06",
    status: "Now playing",
    title:
      "Tree Data Structure | Check if a Given Binary Tree is a BST or NOT | L-92",
    views: 89,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/BGZUW9cj41A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjKen_xVQVvqa0wiLAX_MvW-go1w",
    iframesrc: "https://www.youtube.com/embed/BGZUW9cj41A?si=Cte3FnFWjwiAyFdE",
  },
  {
    time: "8:21",
    status: "Now playing",
    title: "Binary Search Tree | Create BST of Smallest Height | L-91",
    views: 70,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/4ZVY_N-QOVk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmmR03ZF-pe81TejGdK8m58Xxmnw",
    iframesrc: "https://www.youtube.com/embed/4ZVY_N-QOVk?si=ozF3EYjptc828446",
  },
  {
    time: "2:29",
    status: "Now playing",
    title:
      "Binary Search Tree | Print K-th Smallest Element in BST | LeetCode-230(Medium) | L-90",
    views: 61,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/2gLZW8HHAwA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVf22rgNmvN3A-v9FKFXc-NnxG_w",
    iframesrc: "https://www.youtube.com/embed/2gLZW8HHAwA?si=1J1pYULk0XxXcRaV",
  },
  {
    time: "11:30",
    status: "Now playing",
    title: "Binary Search Tree | Delete in BST | Trees Data Structure | L-89",
    views: 86,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/KCHrYIgp1Rg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ4ocEhIaIWkSYkmY2yYmTpyEC1w",
    iframesrc: "https://www.youtube.com/embed/KCHrYIgp1Rg?si=arFZHxBZzcREjz9g",
  },
  {
    time: "12:24",
    status: "Now playing",
    title:
      "Binary Search Tree (BST) | Search and Insert in BST | Trees Data Structure | L-88",
    views: 154,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/KAcRRsTGI38/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANJnQ3jvzoyYujrHpdvpBY_2wPoQ",
    iframesrc: "https://www.youtube.com/embed/KAcRRsTGI38?si=cRJBHe73b43-fSob",
  },
  {
    time: "13:15",
    status: "Now playing",
    title:
      "From Accenture to Nutanix: How Sohail Cracked MTS Role with Programming Pathshala",
    views: 410,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/1k0itXWdOPs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYH3C9BdVC1Afy-GH13E0ON1NNBQ",
    iframesrc: "https://www.youtube.com/embed/1k0itXWdOPs?si=NGC8uROde9vY0Gva",
  },
];

const profile = document.getElementsByClassName("profile");
const menuContainer = document.getElementsByClassName("menu-container");

let menuOpen = false;
document.body.addEventListener("click", (e) => {
  if (e.target.className == "floating-a") {
    menuContainer[0].style.display = "block";
  } else if (e.target === profile[0] && menuOpen == false) {
    menuContainer[0].style.display = "block";
    menuOpen = true;
  } else if (menuOpen == true) {
    menuContainer[0].style.display = "none";
    menuOpen = false;
  }
});

const shortsPage = document.getElementsByClassName("shorts-card-container");
shortsPage[0].addEventListener("click", () => {
  console.log("Redirecting to shorts page");
  document.location.href = `${document.location.origin}/shortsPlayer.html`;
});

const url = document.location.href;
const params = new URL(url).searchParams;
const focus = parseInt(params.get("id"));

const title = document.getElementById("video-title");
title.innerText = videoData[focus].title;

const iframePlayer = document.getElementById("player");
iframePlayer.src = `${videoData[focus].iframesrc}?rel=0&amp;autoplay=1&amp;mute=0`;
