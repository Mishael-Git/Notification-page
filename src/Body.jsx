import React from 'react';
import {GoPrimitiveDot } from 'react-icons/go';
function Body() {
  return (
  <div  className=' px-16 py-9 space-y-2 '>
    <div class="flex  pt-2  h-14 justify-center ">
     <p class=" font-Jakarta">Notifications 3️⃣</p>
     <p class="font-Jakarta text-[#0a317b] pl-80 text-sm">Mark all as read </p>
    </div>
     <div className='flex items-center relative rounded-lg  space-x-3 bg-[#e5effa] h-14'>
       <img class="rounded-full h-6" src='/images/avatar-mark-webber.webp' />
       <p class="font-Jakarta">Mark Webber</p>
       <p class="font-Jakarta text-sm text-slate-400">reacted to your recent post</p>
       <p class="font-Jakarta text-sm text-[#0a317b]">My first tournament today!</p>
          <GoPrimitiveDot class="text-[#f65351]"/>
       <p class="flex-col font-Jakarta text-sm text-slate-400">1m ago</p>
       </div>
         <div className="flex items-center  bg-[#dde7ee] h-14 relative rounded-lg  space-x-3 " >
          <img class="rounded-full h-6" src='/images/avatar-angela-gray.webp'/>
            <p class="font-Jakarta ">Angela Gray</p>
            <p class="font-Jakarta text-slate-500 text-sm">followed you</p>
               <GoPrimitiveDot class="text-[#f65351]"/>
            <p class="font-Jakarta text-slate-400 text-sm ">5m ago</p>
           </div>

           <div className="flex items-center bg-[#dde7ee] h-14 relative rounded-lg  space-x-3">
            <img class="rounded-full h-6" src='/images/avatar-jacob-thompson.webp'/>
            <p class="font-Jakarta">Jacob Thompson</p>
            <p class="font-Jakarta text-slate-400">has joined your group</p>
            <p class="text-[#0a317b] text-sm font-Jakarta">Chess Club</p>
               <GoPrimitiveDot class="text-[#f65351]"/>
            <p class="font-Jakarta text-sm text-slate-400">1 day ago</p>
           </div>
           <div className="flex items-center h-14 relative rounded-lg  space-x-3 ">
            <img class="rounded-full h-6" src="/images/avatar-rizky-hasanuddin.webp"/>
            <p class="font-Jakarta">Rizky Hasanuddin</p>
            <p class="font-Jakarta text-slate-500">sent you a private message</p>
            <p class="font-Jakarta text-slate-400 text-sm">5 days ago</p>
            </div>
            <div class="border-2 bg-[#e5effa]  ">
              <p class="font-Jakarta text-slate-500 text-center">Hello.thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
            </div>
           <div class="flex items-center h-14 rounded-lg  space-x-3" >
            <img class="rounded-full h-6" src="/images/avatar-kimberly-smith.webp"/>
           <p class="font-Jakarta">Kimberly Smith</p>
           <p class="font-Jakarta  text-slate-500">commented on your picture</p>
           <img class="rounded-lg pl-24 h-6" src="images/image-chess.webp"/>
           <p class="font-Jakarta text-slate-400 text-sm">1 week ago</p>
           </div>
           <div className='flex items-center  rounded-lg  space-x-3 h-14 '>
            <img class='rounded-full h-6' src="/images/avatar-nathan-peterson.webp"/>
            <p class="font-Jakarta">Nathan Peterson</p>
            <p class="font-Jakarta text-slate-400 text-sm">reacted to your recent post</p>
            <p class="font-Jakarta text-slate-500 "> 5 end-game strategies </p>
            <p class="font-Jakarta text-slate-400 text-sm">2 weeks ago</p>
           </div>
           <div className='flex items-center items-center relative rounded-lg space-x-3 h-14'>
            <img class="rounded-full h-6" src="images/avatar-anna-kim.webp"/>
            <p class="font-Jakarta">Anna Kim</p>
            <p class="font-Jakarta text-sm text-slate-400">left the group </p>
            <p class="font-Jakarta text-slate-600">Chess Club </p>
            <p class=" font-Jakarta text-sm text-slate-400">2 Weeks ago</p>
           </div>
    </div>    
  )
}

export default Body