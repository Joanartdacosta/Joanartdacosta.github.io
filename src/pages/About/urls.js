const urls = [
  { id: 1, text: "Theatre", url: "url(../images/gallery/theatre.png)" },
  { id: 2, text: "Dance", url: "url(../images/gallery/dance.png)" },
  { id: 3, text: "Cooking", url: "url(../images/gallery/cook.jpg)" },
  { id: 4, text: "Painting", url: "url(../images/gallery/painting.jpg)" },
  { id: 5, text: "Travelling", url: "url(../images/gallery/travel.jpg)" },
  { id: 6, text: "Hiking", url: "url(../images/gallery/hiking.jpg)" },
  { id: 7, text: "Workout", url: "url(../images/gallery/workout.png)" },
  { id: 8, text: "Podcasts", url: "url(../images/gallery/podcasts.png)" },
  { id: 9, text: "Writing", url: "url(../images/gallery/write.jpg)" },
  { id: 10, text: "Games", url: "url(../images/gallery/gameboard.jpg)" },
  { id: 11, text: " ", url: "url(../images/gallery/standup.jpg)" },
  {
    id: 12,
    text: "Chocolate Lover",
    url: "url(../images/gallery/chocolate.jpg)",
  },
];

export default urls;

// import {fill} from "@cloudinary/url-gen/actions/resize";
// import {CloudinaryImage} from '@cloudinary/url-gen';

// const myImage = new CloudinaryImage('sample', {cloudName: 'dbf5bw4sd'}).resize(fill().width(100).height(150));

// return (
//   <div>
//     <AdvancedImage cldImg={myImage} />
//   </div>
// )
