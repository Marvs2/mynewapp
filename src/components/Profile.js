import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="flex flex-row items-center justify-between w-full px-8 py-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            alt="Profile Picture"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold text-foreground">Marvin Villanueva</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary">HOME</a>
          <a href="#" className="text-muted-foreground hover:text-primary">ABOUT</a>
          <a href="#" className="text-muted-foreground hover:text-primary">PROJECTS</a>
          <a href="#" className="text-muted-foreground hover:text-primary">CONTACT</a>
        </nav>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-4xl font-extrabold text-foreground">HEY, I'M Marvs</h2>
        <p className="mt-4 text-lg text-muted-foreground">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <a href="#" className="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/80">PROJECTS</a>
      </div>
      <div className="flex space-x-4 mt-8">
        <a href="#" className="text-muted-foreground hover:text-primary"><img src="https://openui.fly.dev/openui/24x24.svg?text=🐦" alt="Twitter" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary"><img src="https://openui.fly.dev/openui/24x24.svg?text=🔗" alt="LinkedIn" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary"><img src="https://openui.fly.dev/openui/24x24.svg?text=🎥" alt="YouTube" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary"><img src="https://openui.fly.dev/openui/24x24.svg?text=🐙" alt="GitHub" /></a>
        <a href="#" className="text-muted-foreground hover:text-primary"><img src="https://openui.fly.dev/openui/24x24.svg?text=📚" alt="Blog" /></a>
      </div>
    </div>
  );
};

export default Profile;
