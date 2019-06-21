import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.scss']
})
export class AdminAsideComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    (function($) {

      'use strict';
    
      var $items = $( '.nav-main li.nav-parent' );
    
      function expand( $li ) {
        $li.children( 'ul.nav-children' ).slideDown( 'fast', function() {
          $li.addClass( 'nav-expanded' );
          $(this).css( 'display', '' );
          ensureVisible( $li );
        });
      }
    
      function collapse( $li ) {
        $li.children('ul.nav-children' ).slideUp( 'fast', function() {
          $(this).css( 'display', '' );
          $li.removeClass( 'nav-expanded' );
        });
      }
    
      function ensureVisible( $li ) {
        var scroller = $li.offsetParent();
        if ( !scroller.get(0) ) {
          return false;
        }
    
        var top = $li.position().top;
        if ( top < 0 ) {
          scroller.animate({
            scrollTop: scroller.scrollTop() + top
          }, 'fast');
        }
      }
    
      function buildSidebarNav( anchor, prev, next, ev ) {
        if ( anchor.prop('href') ) {
          var arrowWidth = parseInt(window.getComputedStyle(anchor.get(0), ':after').width, 10) || 0;
          if (ev.offsetX > anchor.get(0).offsetWidth - arrowWidth) {
            ev.preventDefault();
          }
        }
    
        if ( prev.get( 0 ) !== next.get( 0 ) ) {
          collapse( prev );
          expand( next );
        } else {
          collapse( prev );
        }
      }
    
      $items.find('> a').on('click', function( ev ) {
    
        var $html   = $('html'),
          $window = $(window),
          $anchor = $( this ),
          $prev   = $anchor.closest('ul.nav').find('> li.nav-expanded' ),
          $next   = $anchor.closest('li'),
          $ev     = ev;
    
        if( $anchor.attr('href') == '#' ) {
          ev.preventDefault();
        }
    
        if( !$html.hasClass('sidebar-left-big-icons') ) {
          buildSidebarNav( $anchor, $prev, $next, $ev );
        } else if( $html.hasClass('sidebar-left-big-icons') && $window.width() < 768 ) {
          buildSidebarNav( $anchor, $prev, $next, $ev );
        }
    
      });
    
      // Chrome Fix
      $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
      if( $.browser.chrome && !$.browser.mobile ) {
        var flag = true;
        $('.sidebar-left .nav-main li a').on('click', function(){
          flag = false;
          setTimeout(function(){
            flag = true;
          }, 200);
        });
    
        $('.nano').on('mouseenter', function(e){
          $(this).addClass('hovered');
        });
    
        $('.nano').on('mouseleave', function(e){
          if( flag ) {
            $(this).removeClass('hovered');
          }
        });	
      }
    
      $('.nav-main a').filter(':not([href])').attr('href', '#');
    
    }).apply(this, [jQuery]);
    
  }
}
