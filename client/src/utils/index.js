import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
  //Getting random index from 1 to 49
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  //check to not get same random prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

//To download the images on the homepage
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}