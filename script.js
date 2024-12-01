const videoData = [
  {
    time: "15:59",
    status: "Now playing",
    title: "Tier 3 College to Amazon | Bhoomika Breaks The Code",
    views: 162,
    timeAgo: "15 hours ago",
    thumbnail:
      "https://i.ytimg.com/vi/r4JJTavrGow/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW4ZnDl1U8OOr3f69ldLTpvEp-fA",
  },
  {
    time: "8:50",
    status: "Now playing",
    title: "Dynamic Programming | Stairs Case Problem | L-107",
    views: 17,
    timeAgo: "18 hours ago",
    thumbnail:
      "https://i.ytimg.com/vi/2tuSxX2Zy4k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAt2bPf0Tz0T7fMGE0U6ULQRBz7RA",
  },
  {
    time: "23:57",
    status: "Now playing",
    title: "Understanding Dynamic Programming by Fibonacci Series | L-106",
    views: 49,
    timeAgo: "1 day ago",
    thumbnail:
      "https://i.ytimg.com/vi/QSHT-JZWHxk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkShhKGl1R5d6Cg2aPsmCFpSI57A",
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
  },
  {
    time: "9:27",
    status: "Now playing",
    title: "Graph | Cycle Detection in Undirected Graph | L-104",
    views: 114,
    timeAgo: "3 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/vI_cJTIMmSM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfK5yqeEBr_QsX1It2fMTN3Fqzjw",
  },
  {
    time: "17:42",
    status: "Now playing",
    title: "Graph | BFS on Graph(Breadth-First Search) | L-103",
    views: 127,
    timeAgo: "4 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/vR0JBiQMV0g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbUOyCNUHxPSNNgC6Cg4LqDap5-w",
  },
  {
    time: "7:01",
    status: "Now playing",
    title: "Perfect Roadmap For Low Level Design Interviews",
    views: 479,
    timeAgo: "4 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/tT8LjYdbKUo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsWdd9prw07yl0PWYHmixDV5fYOg",
  },
  {
    time: "13:17",
    status: "Now playing",
    title: "Graph | Count the No of Island | LeetCode - 200(Medium) | L-102",
    views: 51,
    timeAgo: "5 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/6mSpg4KnaU8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeQ2y4gX8RG3glHV1MU2_tDlYNMg",
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
  },
  {
    time: "32:23",
    status: "Now playing",
    title: "Graph | Introduction to Graph | Master Graph Terminology | L-99",
    views: 80,
    timeAgo: "8 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/69K2PKLLs_Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABj6hrKVypJivn5dZLNMnApDsvNg",
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
  },
  {
    time: "32:23",
    status: "Now playing",
    title: "Backtracking | Rat in Maze Problem | L-96",
    views: 49,
    timeAgo: "11 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/T1bFHiBgBac/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBstCpbUlhxUq4mkWdvx5nGY8YOIQ",
  },
  {
    time: "15:52",
    status: "Now playing",
    title: "Backtracking | Print all the Subset of Set | L-95",
    views: 73,
    timeAgo: "12 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/lvWBucZlvd8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqpmK3fpbNoVnpG0a3pyf-NxaP5w",
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
  },
  {
    time: "45:17",
    status: "Now playing",
    title: "Backtracking | Generate all Permutation of String | L-93",
    views: 143,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/4xufJqcQRIY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-_-xUpGM82plofPidNkjHWMBUMQ",
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
  },
  {
    time: "8:21",
    status: "Now playing",
    title: "Binary Search Tree | Create BST of Smallest Height | L-91",
    views: 70,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/4ZVY_N-QOVk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmmR03ZF-pe81TejGdK8m58Xxmnw",
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
  },
  {
    time: "11:30",
    status: "Now playing",
    title: "Binary Search Tree | Delete in BST | Trees Data Structure | L-89",
    views: 86,
    timeAgo: "2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/KCHrYIgp1Rg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ4ocEhIaIWkSYkmY2yYmTpyEC1w",
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

const parent = document.getElementById("video-container");
let counter = 0;
let address = "";
const addLabel = (div, text, className) => {
  const label = document.createElement("label");
  label.innerText = text;
  if (className) {
    label.className = className;
  }
  div.appendChild(label);
};

const addImage = (div, src, className) => {
  const img = document.createElement("img");
  if (src) img.src = src;
  else {
    address = `./gifs/id${counter}.webp`;
    img.src = address;
    counter = counter + 1;
  }
  img.alt = "thumb";
  img.className = className;
  div.appendChild(img);
};

const addSvgIcon = (div, pathData, classN) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "24px");
  svg.setAttribute("viewBox", "0 -960 960 960");
  svg.setAttribute("width", "24px");
  svg.setAttribute("fill", "#FFFFFF");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);

  svg.appendChild(path);
  svg.classList.add(classN);
  div.appendChild(svg);
};

const createDiv = (card, classN, content, time) => {
  const div = document.createElement("div");
  div.className = classN;

  if (classN === "card-image-container") {
    // Thumbnail and hover boxes
    addImage(div, content.thumbnail, "thumb");
    addImage(div, "", "gif");

    const hovBox1 = document.createElement("div");
    hovBox1.className = "hov-box-1";
    addSvgIcon(
      hovBox1,
      "m472-312 56-56-128-128v-184h-80v216l152 152Zm248 172v-88q74-35 117-103t43-149q0-81-43-149T720-732v-88q109 38 174.5 131.5T960-480q0 115-65.5 208.5T720-140Zm-360 20q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T0-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T360-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T720-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T360-120Zm0-80q117 0 198.5-81.5T640-480q0-117-81.5-198.5T360-760q-117 0-198.5 81.5T80-480q0 117 81.5 198.5T360-200Zm0-280Z",
      "svg-icon"
    );
    div.appendChild(hovBox1);

    const hovBox2 = document.createElement("div");
    hovBox2.className = "hov-box-2";
    addSvgIcon(
      hovBox2,
      "M120-320v-80h320v80H120Zm0-160v-80h480v80H120Zm0-160v-80h480v80H120Zm520 520v-320l240 160-240 160Z",
      "svg-icon"
    );
    div.appendChild(hovBox2);

    const timeStamp = document.createElement("div");
    timeStamp.className = "time-stamp";
    timeStamp.innerText = time;
    div.appendChild(timeStamp);
  }

  if (classN === "card-title-container") {
    addLabel(div, content.title, "title");
    addSvgIcon(
      div,
      "M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",
      "svg-icon"
    );
  }

  if (classN === "card-meta-data-container") {
    addLabel(div, `${content.views} views • ${content.timeAgo}`, "views");
  }

  card.appendChild(div);
};

const createCard = (container, video, idx) => {
  const card = document.createElement("div");
  card.setAttribute("id", idx);
  card.className = "card-container";

  // Create image container
  createDiv(card, "card-image-container", video, video.time);

  // Create title container
  createDiv(card, "card-title-container", video, video.time);

  // Create metadata container
  createDiv(card, "card-meta-data-container", video, video.time);

  card.addEventListener("click", (e) => {
    const url = `./player.html?id=${idx}`;
    window.location.href = url;
  });
  container.appendChild(card);
};

const createUI = (arr) => {
  const container = new DocumentFragment();
  arr.forEach((video, idx) => createCard(container, video, idx));
  parent.appendChild(container);
};

createUI(videoData);
