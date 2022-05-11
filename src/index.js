import './index.scss';
import { tns } from 'tiny-slider'
import AOS from "aos";

AOS.init();

  var slider = tns(
    {
      container: '.my-slider',
      items: 1,
      controls:false,
      nav:false,
      autoplay:true,
      loop:true,
      autoplayButton:false,
      autoplayButtonOutput:false
    }
  )
