# YouTube Clone

A lightweight, responsive front-end clone of YouTube built using HTML5, CSS3, and JavaScript.

## 🚀 Features

- **Responsive Navigation Bar**: Includes search input, voice search icon, action buttons, and user profile avatar.
- **Collapsible Sidebar**: Dynamic navigation menu with quick links and subscribed channels list that toggles between expanded and compact views.
- **Video Grid / Homepage Feed**: Clean layout displaying video thumbnails, channel avatars, video titles, channel names, and view counts.
- **Video Playback Pages**: Dedicated watch pages (`play-video-1.html` to `play-video-12.html`) featuring an HTML5 video player, video descriptions, like/dislike/share/save actions, publisher details, and a sidebar for recommended videos.
- **Timestamp Jumping**: JavaScript interactivity allowing viewers to seek to specific timestamps in videos.

## 📁 Directory Structure

```text
├── index.html               # Main homepage video grid
├── play-video-1.html ... 12 # Video player pages
├── style.css                # Global stylesheet for styling and layout
├── script.js                # JavaScript for sidebar toggle and video interactivity
├── banner/                  # Channel banner graphics
├── channel-profile-pics/    # Creator profile icons
├── favicon/                 # Site favicon
├── images/                  # UI icons and action buttons
├── play-video-graphics/     # Video player UI icons (like, dislike, share, save)
├── subscribed/              # Subscribed channels profile pictures
├── thumbnails/              # Video thumbnail images
└── videos/                  # Video media files
```

## 🛠️ Built With

- **HTML5**: Semantic elements for layout structure.
- **CSS3**: Flexbox and CSS Grid for layout and responsive design.
- **JavaScript (ES6)**: DOM manipulation for interactive UI components.

## 💻 How to Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd YouTube-Clone
   ```

2. **Open in browser**:
   - Open `index.html` directly in your web browser, OR
   - Use a local static file server (e.g. VS Code Live Server, `python3 -m http.server`, or `npx serve .`).
