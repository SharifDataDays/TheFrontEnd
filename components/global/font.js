import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href = '/fonts/font.css';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const iransans = new FontFaceObserver('IRANSans');

  iransans.load().then(() => {
    document.documentElement.classList.add('iransans');
  });
};

export default Fonts;
