let movie =[
{ title :"Vikram",
  studio:"Rajkamal productions",
  rating:"PG13"
},
{ title :"Bigil",
  studio:"AGS",
  rating:"PG"
},
{ title :"Sarkar",
  studio:"Sun Productions",
  rating:"R"
},
{ title :"Ponniyin Selvan",
  studio:"Lyca Production",
  rating:"PG"
},
{ title :"Teddy",
  studio:"Studio Green",
  rating:"PG"
},
];

var result= movie.filter(getPG => getPG.rating == "PG");
console.log(result)