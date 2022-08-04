export default function displayMsg(cond) {
    cond = true;
    setTimeout(() => {
      cond = false;
    }, 1500);
  }