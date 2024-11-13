# Krypton OS 
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FShrey719%2FKrypton&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

It shits itself every 3 minutes 

# First priority Todo 
- Mount ~/ on localStorage and the rootfs on idb (fix for bg #2)
- 


# Known issues 
- When downloading from uv/search engine, the topbar gets broken (bg #1)
- If rootfs exceeds around 10 mb, it shuts down and stops working. The only way to fix this as the end user is to wipe your rootfs by removing it and then going to /oobe.html. The fix on our side is to use IDB, which has a 2gb limit instead of the 10mb that localstorage gives   (bg #2)

# Features 
- DNF support (kinda)   
- UV 3 w/ adblock   
- Downloading apps   
- A package manager   
- A rootfs
- A file system (but the wrappers sometimes kill themselves)   
- A javascript terminal (regular one coming soon i promise, once i sort out /bin/sh/dnf and.. the rest of the stuff that goes in /bin/sh)


# TODO
- Sandbox the terminal   
- Make js terminal only availible in developer mode    
- Make developer mode     
- Make OOBE CSS
- Make apps use a database instead of being hardcoded   
- Finish the shell and finish all javascript things that go in /bin/sh   
- Make the filesystem editable to the end user without developer mode (but make it use the fs wrapper & limit rootfs editing)     
- Add a /uv directory in /sys (/sys/uv/) for uv configs and user settings 
- Make system flags do something
