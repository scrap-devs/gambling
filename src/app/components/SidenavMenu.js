'use client'

// Import necessary libraries and components
import React from 'react';
import './app.css';
import Link from "next/link";
import Image from "next/image";

function createSidebarMenu() {
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'section-wrapper svelte-oc0lpz';
  
    // Title
    const wrapperText = document.createElement('div');
    wrapperText.className = 'wrapper-text svelte-shteu8';
    const title = document.createElement('span');
    title.className = 'weight-semibold line-height-default align-left size-default text-size-default variant-highlighted with-icon-space is-truncate svelte-17v69ua';
    title.style.maxWidth = '100%';
    title.textContent = 'Games';
    wrapperText.appendChild(title);
    sectionWrapper.appendChild(wrapperText);
  
    // Line Divider
    const lineWrapper = document.createElement('div');
    lineWrapper.className = 'line-wrapper svelte-1sfce85';
    const hr = document.createElement('hr');
    hr.className = 'svelte-1sfce85';
    lineWrapper.appendChild(hr);
    sectionWrapper.appendChild(lineWrapper);
  
    // Menu items
    const menuItems = [
      { href: '/casino/group/stake-originals', icon: 'icon-code', text: 'Stake Originals' },
      { href: '/casino/group/slots', icon: 'icon-code', text: 'Slot Games' },
      { href: '/casino/group/stake-exclusives', icon: 'icon-code', text: 'Stake Exclusives' },
      { href: '/casino/group/live-dealers', icon: 'icon-code', text: 'Live Dealers' },
      { href: '/casino/games/poker', icon: 'icon-code', text: 'Stake Poker' },
      { href: '/casino/group/feature-spins', icon: 'icon-code', text: 'Feature Spins' },
      { href: '/casino/group/table-games', icon: 'icon-code', text: 'Table Games' }
    ];
  
    menuItems.forEach(item => {
      const anchor = document.createElement('a');
      anchor.className = 'base-sidebar-anchor max-w-full svelte-1ih38ux';
      anchor.href = item.href;
      anchor.setAttribute('data-sveltekit-reload', 'off');
      anchor.setAttribute('data-sveltekit-preload-data', 'off');
  
      const button = document.createElement('button');
      button.type = 'button';
      button.tabIndex = 0;
      button.className = 'inline-flex relative items-center gap-2 font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-grey-400 betterhover:hover:text-white focus-visible:outline-white text-sm leading-none [&_svg]:text-grey-200 [&:hover>svg]:text-white py-[0.8125rem] px-[1rem] w-full rounded-sm justify-start max-w-full';
      button.setAttribute('data-button-root', '');
  
      const icon = document.createElement('svg');
      icon.className = 'svg-icon';
      icon.setAttribute('fill', 'currentColor');
      icon.setAttribute('viewBox', '0 0 64 64');  // Adjust the viewBox as needed
      // Add SVG path or other icon details here
  
      const span = document.createElement('span');
      span.style.maxWidth = '100%';
      span.style.display = 'block';
      span.className = 'svelte-17o987 is-truncate';
      span.textContent = item.text;
  
      button.appendChild(icon);
      button.appendChild(span);
      anchor.appendChild(button);
      sectionWrapper.appendChild(anchor);
    });
  
    document.body.appendChild(sectionWrapper);
  }
  
  createSidebarMenu();