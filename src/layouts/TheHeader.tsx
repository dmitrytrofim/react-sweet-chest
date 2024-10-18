import Container from '@/components/Container';

function Header() {
 return (
  <header className="border-b-[1px] border-[rgba(126,134,142,0.1)]">
   <Container>
    <div className="flex items-center justify-between p-[36px_0_30px]">
     <a href="#" className="text-21 font-500 leading-[1.43]">
      Сладкий сундук
     </a>
     <address className="flex items-center gap-[70px] not-italic">
      <div className="flex items-start gap-[15px]">
       <svg
        width="13"
        height="17"
        viewBox="0 0 13 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M12.0788 4.23113C12.0183 4.00434 11.8954 3.76268 11.8045 3.55111C10.7167 0.936887 8.33993 0 6.42078 0C3.85165 0 1.02206 1.72271 0.644287 5.27362V5.99909C0.644287 6.02937 0.654722 6.30134 0.669543 6.43738C0.881315 8.12966 2.21665 9.92817 3.21393 11.6205C4.28686 13.4336 5.40018 15.2171 6.50319 17C7.18332 15.8365 7.86101 14.6578 8.52565 13.5245C8.70679 13.1919 8.91706 12.8595 9.0984 12.542C9.21926 12.3306 9.45017 12.1192 9.55566 11.9226C10.6285 9.95825 12.3555 7.97875 12.3555 6.02933V5.22849C12.3555 5.01715 12.0936 4.2767 12.0788 4.23113ZM6.46781 7.87298C5.71262 7.87298 4.88601 7.49537 4.478 6.45252C4.41721 6.28651 4.42211 5.95384 4.42211 5.92336V5.45492C4.42211 4.12548 5.55093 3.52091 6.53295 3.52091C7.74192 3.52091 8.67695 4.48815 8.67695 5.69713C8.67695 6.90606 7.67678 7.87298 6.46781 7.87298Z"
         fill="white"
        />
       </svg>
       <span className="text-12">
        г. Санкт Петербург,
        <br /> ул. Куйбышева 31
       </span>
      </div>
      <div className="flex items-start gap-[15px]">
       <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        className="mt-[3px]"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M14.4455 12.5686C13.8247 11.9557 13.0498 11.9557 12.4329 12.5686C11.9624 13.0351 11.4919 13.5017 11.0293 13.9762C10.9028 14.1067 10.796 14.1343 10.6418 14.0473C10.3374 13.8813 10.0132 13.7468 9.72058 13.565C8.35648 12.707 7.21381 11.6038 6.20161 10.3623C5.69947 9.74551 5.25268 9.08521 4.94032 8.34188C4.87706 8.19163 4.88892 8.09278 5.01149 7.97021C5.482 7.51551 5.94065 7.04895 6.40326 6.58239C7.04774 5.93395 7.04774 5.17481 6.39931 4.52241C6.03159 4.15075 5.66388 3.78699 5.29617 3.41532C4.9166 3.03575 4.54098 2.65222 4.15745 2.2766C3.53669 1.67166 2.76172 1.67166 2.14492 2.28056C1.67045 2.74712 1.21575 3.22554 0.733378 3.68419C0.286589 4.10725 0.0612166 4.62522 0.0137699 5.23016C-0.061354 6.21468 0.179833 7.14385 0.519868 8.04929C1.21575 9.92343 2.2754 11.588 3.56041 13.1142C5.29617 15.1782 7.36801 16.8111 9.79175 17.9894C10.883 18.5192 12.0138 18.9264 13.2435 18.9937C14.0896 19.0411 14.825 18.8276 15.4142 18.1673C15.8175 17.7166 16.2722 17.3053 16.6992 16.8744C17.3318 16.2338 17.3358 15.4589 16.7071 14.8263C15.9559 14.0711 15.2007 13.3198 14.4455 12.5686Z"
         fill="white"
        />
        <path
         d="M13.6905 9.41851L15.1495 9.16942C14.9202 7.82905 14.2876 6.6152 13.3268 5.65045C12.3106 4.6343 11.0256 3.99377 9.6101 3.79608L9.4045 5.26297C10.4997 5.41717 11.4961 5.91141 12.2829 6.69824C13.0263 7.44157 13.5126 8.38259 13.6905 9.41851Z"
         fill="white"
        />
        <path
         d="M15.9718 3.07613C14.2875 1.39177 12.1563 0.328173 9.80374 0L9.59814 1.46689C11.6304 1.75157 13.473 2.67283 14.928 4.12391C16.3079 5.50382 17.2133 7.24748 17.5415 9.16512L19.0005 8.91603C18.617 6.69394 17.5692 4.67745 15.9718 3.07613Z"
         fill="white"
        />
       </svg>
       <div className="flex flex-col">
        <a href="#" className="text-20 font-700">
         8 (812) 844-95-49
        </a>
        <span className="text-13 leading-[1.5]">Ежедневно с 9:00 до 20:00</span>
       </div>
      </div>
     </address>
    </div>
   </Container>
  </header>
 );
}

export default Header;
