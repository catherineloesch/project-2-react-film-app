import React from 'react'
import NavBar from './NavBar'
import './Header.css'


export default function Header() {
  return (
    <header className='header'>
        <div className='header-title'>
            <svg className='span-popcorn' onClick={() => window.scroll(0,0)} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 128 128"><path fill="#B40E1C" d="m20.71 44.56l-6.52-5.93s-.27-2.95 2.04-3.89c2.63-1.07 5.16.19 5.16.19l3.99 7.68l-4.67 1.95zm85.99.2l-5.64-4.47l3.79-5.54s1.96-1.59 5.35.1c2.59 1.29 3.23 3.79 2.93 4.56c-.29.77-6.43 5.35-6.43 5.35z"/><path fill="#FFB91F" d="m22.75 43.49l-3.15-.85s-.36-1.49.32-2.81c.71-1.37 2.1-1.22 2.1-1.22s-3.35-1.63-1.89-5.62s5.93-3.11 5.93-3.11s-.1-2.53 1.95-4.09c2.04-1.56 3.6-.39 3.6-.39s-1.58-5.05 2.33-7.39c3.34-2 5.64-.1 5.64-.1s1.35-3.38 5.05-3.45c2.77-.05 3.61 1.02 3.61 1.02s.97-1.95 2.53-2.82c1.56-.88 2.49-.75 2.49-.75s-.71-2.42.04-4.4c1.32-3.5 4.96-4.28 7.68-3.6c3.73.93 3.27 3.51 3.27 3.51s1.89-1.27 3.64-1.07c1.75.19 2.67 1.35 2.67 1.35s1.22-3.58 5.3-3.58c4.09 0 5.25 2.43 5.45 4.28s-1.03 4.03-1.03 4.03s.59.23.77 1.63c.14 1.06-.27 2-.27 2s1.88-1.48 5.63 0c6.22 2.45 4.92 9.07 4.92 9.07s1.8-.21 3.16.37c1.56.67 2.28 1.77 2.28 1.77s.35-2.9 3.99-2.92c3.8-.02 6.91 7.1 6.23 9.14c-.68 2.04-2.53 2.53-2.53 2.53s1.69.48 2.32 2.53c.75 2.42.13 4.99.13 4.99s-26.38 16.1-26.67 16s-32.98 2.43-32.98 2.43L22.75 43.49z"/><path fill="#FCE193" d="M34.84 48.47c0-.21.3-1.08.89-1.46c.73-.47 1.82-.52 1.82-.52s-1.2-.57-1.87-2.45c-.44-1.22.1-2.54.1-2.54s-3.17.15-3.9-2.25s.42-2.71.42-2.71s-1.27-6.81 4.06-6.93c7.29-.16 6.04 9.11 6.04 9.11s1.04 0 1.67.57c.62.57.83 1.15.83 1.15s1.36-2.05 4.58-1.56c7.6 1.15 4.06 8.59 4.06 8.59s-1.41-3.85-3.85-4.01c-2.45-.16-5.47 1.51-5.47 1.51s4.63.57 5.88 3.02s1.15 5.78 1.15 5.78s-9.27 2.71-9.48 2.4c-.22-.3-6.93-7.7-6.93-7.7z"/><path fill="#E17A2C" d="M40.61 40.35c-.67-.29-2.55 1.36-2.59 2.59c-.04 1.23 1 2.8 2.24 2.91c1.23.11 2.46-1.16 2.46-2.39c0-.62-1.28-2.75-2.11-3.11z"/><path fill="#FCE193" d="M46.27 26.55s-4.99-.72-4.89 3.4c.13 5.46 6.28 4.65 6.33 4.94c.05.29.3 2.15.3 2.15s2.43-.28 4.78 1.11s3.36 3.02 3.36 3.02s.48-2.25 1.15-3.21c.67-.96 1.39-1.68 1.39-1.68s0-1.2-.34-2.16c-.24-.69-.81-1.05-.81-1.05s5.4-2.56 2.68-6.81c-3.07-4.79-7.96-.34-7.96-.34s-1.92-2.78-4.31-2.11c-2.4.67-1.68 2.74-1.68 2.74zm12.27 17.97s-1.44-4.94 1.25-6.33s4.46.19 4.55-.1s4.27-4.75 7.86-4.65c5.32.14 6.54 3.52 6.66 3.88c.59 1.72-.19 4.51-.19 4.51s2.01-3.12 4.89-2.83c2.88.29 3.2 2.59 3.2 2.59s3.18 1.97 3.03 3.84c-.14 1.87-2.16 3.26-2.16 3.26l-4.89 4.79l-5.27-1.82s-.72-2.4-.72-3.88c0-1.49.14-2.68.14-2.68s-1.44.77-2.44 1.05c-1.01.29-3.12.34-3.12.34s-.08-1.21-2.11-2.59c-4.45-3.02-10.68.62-10.68.62z"/><path fill="#FCE193" d="M60.65 51.18s-1.63-5.92 3.07-6.04c5.61-.14 6.42 4.84 6.62 7.62c.19 2.78-7.24 7.05-7.53 6.9c-.29-.14-7.25-4.42-7.25-4.42s-.53-1.54.64-2.91c1.22-1.45 4.45-1.15 4.45-1.15zm31.21-2.73s-1.63-1.34-1.15-3.88s2.44-2.68 2.44-2.68s-1.49-2.3-.77-3.79s1.87-1.82 5.56-1.77s5.56 1.05 6.76 2.35c1.08 1.16.38 4.7.38 4.7s-5.46 6.57-6.09 6.42c-.62-.15-7.13-1.35-7.13-1.35zm-15.3-17.11s1.92 1.2 2.54 2.11c.62.91 1.44 2.64 1.44 2.64s.4-4.68 2.33-6.96c2.11-2.49 4.86-2.39 4.91-2.39c.52 0 1.39-3.88-.62-5.94c-2.52-2.58-6.85-1.68-6.81-1.29s1.58 2.25.58 6.57c-.93 3.94-4.37 5.26-4.37 5.26zm-13.42.91c.77.39 2.14-.9 3.31-1.44c1.34-.62 3.07-.86 3.12-1.53s-1.87-3.07-4.65-1.73c-2.78 1.34-2.64 4.27-1.78 4.7zm-41.32 2.32c-.24 2.44 2.25 3.2 2.25 3.2s-.31 2.25.58 3.55c.72 1.05 2.21 2.35 2.83 2.21c.62-.14 2.59-2.01 2.59-2.16c0-.14-.11-5.51-1.25-7.43c-1.58-2.7-6.57-3.7-7 .63zm8.73-3.23c.67 0 1.34-1.53 1.73-2.11c.38-.58 1.82-1.53 1.82-1.53s-2.21-1.53-3.6-.14c-1.39 1.38-.96 3.78.05 3.78zm5.36-4.36s1.34-.14 2.11-.1c.77.05 2.06.29 2.06.29s.19-1.25 1.58-2.16c1.39-.91 2.68-.62 2.68-.62s.29-1.73 1.39-2.49c1.1-.77 1.77-.77 1.77-.77s1.02-2.62-.48-3.6c-4.27-2.78-6.46 2.8-7.19 2.92c-.54.09-2.42-1.78-4.48-.34c-3.5 2.46.56 6.87.56 6.87zm13.52-6.28s1.15.29 2.01.81s2.16 1.44 2.16 1.44l6.33-.19s1.39-1.82 3.4-2.64c1.64-.67 3.55-.72 3.55-.72s.18-4.68-3.69-5.9c-4.89-1.53-6.52 3.45-6.52 3.45s-1.44-1.62-3.12-1.58c-3.73.1-4.12 5.33-4.12 5.33z"/><path fill="#E17A2C" d="M56.57 19.02c-.58 0-3.98 2.92-4.07 3.21c-.1.29.81.77.91 1.05c.1.29 6.23-.38 6.57-.62c.33-.24-2.11-3.64-3.41-3.64zm-7.66 9.87c.03.57 2.83 4.31 3.69 4.46s3.7-3.02 2.88-3.74c-.38-.34-3.21.05-3.21.05s-.05-2.11-.29-2.44c-.25-.34-3.12.72-3.07 1.67z"/><path fill="#FCE193" d="M55.86 12.5c.73.02 1.39-2.68 2.25-3.55s2.92-1.73 2.44-3.07s-4.17-.96-5.37 1.01c-1.33 2.19-.91 5.56.68 5.61zm10.21-.72c.15.66 2.01 1.44 2.3 1.77c.29.34 1.63 1.53 1.63 1.53s3.07-.77 4.89-.29c1.82.48 2.68 1.77 3.21 1.44c.53-.34.24-1.77-.05-2.25s-.86-1.39-.86-1.39s2.76-4.28-.1-4.99c-4.07-1.01-4.89 3.12-5.42 3.21s-2.06-1.53-3.74-1.29c-1.67.25-2.06 1.4-1.86 2.26zm2.3 12.32c.68 1.51 2.83 1.63 2.83 1.63s1.05 3.36 3.21 3.64c2.16.29 3.58-1.96 4.03-3.83c.58-2.4.59-7.59-4.75-7.53c-4.03.05-5.75 5.13-5.32 6.09zm21.18 17.11c.67-.02.22-3.96 2.34-5.56c2.29-1.73 4.08-1.41 6.43-1.25c2.44.16 4.09.92 4.6.24c.64-.84 1.03-6.7-2.3-7.19c-1.97-.29-2.49 1.63-2.49 1.63s-2.01-.43-3.12 1.58c-.76 1.39-.81 2.3-1.15 2.4c-.15.04-5.29-7.9-9.3-3.07c-4.17 5.03 3.45 9.2 3.45 9.2s.25 2.07 1.54 2.02z"/><path fill="#E17A2C" d="M74.36 18.88c-.27.18-.38 4.84-.14 4.89c.24.05 3.26 1.68 3.69 1.25c.43-.43.43-2.64-.34-4.07c-.48-.92-2.25-2.7-3.21-2.07zm-6.38-5.85c-.04.49.62 3.07 1.39 3.16c1.28.16 3.64-1.2 3.88-1.68s-.19-1.87-2.11-2.35c-1.9-.47-3.11.2-3.16.87zm.48 29.19c.67.72 2.99-1.24 3.83-.86c.96.43 0 2.92 1.05 3.21c1.05.29 3.16-3.12 2.92-4.6c-.1-.62-1.34-1.44-2.68-1.92s-3.16-.81-3.98-.29s-2.34 3.17-1.14 4.46zm28.04 3.45s-.1-3.07.72-4.6c.81-1.53 2.88-1.29 3.21-.91s1.49 3.16 1.49 3.16l-2.44 4.17l-2.98-1.82z"/><path fill="#DFDFDF" d="m63.35 61.35l-9.56-3.74l-.27-.42c-.48-.75-6.78-1.76-6.78-1.76l-.56-.11l-7.85-1.69l-.22-.38c-.49-.83-6.81-3.08-6.81-3.08l-5.94-2.4l-.16-.39c-.53-1.27-4.55-3.47-4.64-3.29l-1.79-.89c.47-.95 1.96-2.52 4.22-1.61c1.97.79 4.22 3.52 4.71 4.6l3.23 1.67c.79-.5 2.28-1 4.32-.29c2.96 1.04 3.74 3.33 4.35 4.28l6.5 1.4c.69-.56 2.15-1.5 4.1-1.18c3.41.56 4.24 2.53 4.95 3.53l7.49.64c.75-1.03 2.66-3.21 5.63-3.62c2.78-.39 4.81.57 5.63 1.53l7.16-2.41c.6-.93 2.67-3.56 5.91-4.15c3.02-.55 5.39.98 6.48 1.67l4.78-2.45c.51-.86 2.16-3.54 4.68-4.31c3.15-.95 5.17 1.04 5.26 1.11l-1.35 1.48c-.04-.04-6.61 3.69-6.63 3.72l-1.41 2.43l-5.52.36l-.5-.4c-.02-.02-10.13 1.81-10.15 1.84l-.19.35l-9.04 3.04l-.44-.47c-.06-.06-9.59 5.39-9.59 5.39z"/><path fill="#FFF" d="M107.72 46.58c-.23.02-2.11-2.62-4.56-1.6c-2.45 1.03-4.79 5.24-4.79 5.24l-7.63 1.2s-1.03-2.08-3.88-1.28c-2.85.8-5.41 4.3-5.47 4.07c-.06-.23-8.4 1.9-8.4 1.9S71.34 54.27 68.4 55c-3.04.76-4.69 4.49-4.69 4.49l-9.47-1.88s-1.62-2.72-4.07-3.06c-2.45-.34-4.04 1.26-4.04 1.26l-7.07-1.72s-1.08-2.96-4.16-3.99s-4.56.28-4.56.28l-4.58-3.11s-1.35-2.22-3.92-3.42c-2.56-1.2-3.3.9-3.3.9L34.5 111.9l30.56 12.43l30.17-13.21c.02.01 13.18-64.61 12.49-64.54z"/><path fill="#ED3D23" d="m20.71 44.56l-.02-.07c-.28-1.31-1.01-4.28-2.74-5.63c-2.25-1.75-3.76-.24-3.76-.24l17.35 72.18l4.24 1.62l-15.07-67.86zm11.25 5.42s-.27-4.51-3.83-5.58c-2.83-.85-2.95 2.06-2.95 2.06l14.07 67.39l5.37 2.16l-12.66-66.03zm15.1 5.21s-1.45-4.85-5.14-5.26c-3.69-.41-3.32 2.69-3.32 2.69l9.55 64.86l5.37 2.18l-6.46-64.47zm11.73-1.37c-4.05-.51-4.61 3.56-4.61 3.56l4.19 64.26l6.72 2.7l-1.2-65.18s-.85-4.8-5.1-5.34zm23.25.25s.21-5.1-4.35-3.81c-4.56 1.28-5.06 5.55-5.06 5.55l-1.14 65.75l5.66-2.51l4.89-64.98zm16.91-5.47s-.19-4-4.1-3.19c-4.1.84-4.14 4.97-4.14 4.97l-7.19 65.93l5.46-2.41l9.97-65.3zm10.44-9.58c-3.36 1.61-3.65 5.93-3.65 5.93l-11.45 66.62l5.37-2.38l13.51-69.84c-.01 0-.84-1.74-3.78-.33z"/></svg>
            <div>
              <span className='header-title-text' onClick={() => window.scroll(0,0)}>Film & TV Stuff</span>
              <NavBar />
            </div>
            <svg className='span-projector' onClick={() => window.scroll(0,0)} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 64 64"><path fill="currentColor" d="M62 21.148c0-7.756-6.288-14.042-14.042-14.042c-5.888 0-10.922 3.628-13.009 8.767C33.647 8.006 26.832 2 18.595 2C9.431 2 2 9.431 2 18.595c0 8.87 6.963 16.093 15.717 16.552c-.249.395-.399.85-.399 1.321v8.296l-8.936-4.467v19.15l9.021-4.511c.28 1.077 1.28 1.956 2.469 1.956h7.659V62h11.49v-5.107h6.383c1.4 0 2.553-1.221 2.553-2.552v-11.49l6.383 1.276v-8.936l-6.383 1.276c0-.462-.146-.906-.385-1.296c.129.004.254.02.385.02C55.712 35.191 62 28.904 62 21.148m-2.63 2.045a3.22 3.22 0 0 1-6.438 0a3.22 3.22 0 0 1 6.438 0m-6.437-12.365a3.217 3.217 0 1 1 0 6.435a3.217 3.217 0 0 1-3.217-3.217a3.216 3.216 0 0 1 3.217-3.218m-2.097 10.807a.805.805 0 1 1-1.61 0a.805.805 0 0 1 1.61 0m-1.609-3.092a.805.805 0 1 1-.001 1.61a.805.805 0 0 1 .001-1.61m-1.244 3.897a.806.806 0 1 1-.806.804a.806.806 0 0 1 .806-.804m-.439-3.092a.804.804 0 1 1-1.608.004a.804.804 0 0 1 1.608-.004m-.806 2.287a.804.804 0 1 1-1.609.001a.804.804 0 0 1 1.609-.001M24.476 6.398a3.804 3.804 0 1 1 0 7.605a3.804 3.804 0 0 1 0-7.605m-2.479 12.773a.952.952 0 0 1-1.902 0a.95.95 0 1 1 1.902 0m-1.902-3.654a.951.951 0 1 1-.003 1.903a.951.951 0 0 1 .003-1.903m-1.469 4.604a.95.95 0 1 1-.005 1.901a.95.95 0 0 1 .005-1.901m-.52-3.653a.952.952 0 1 1-1.903-.003a.952.952 0 0 1 1.903.003m-.95 2.703a.952.952 0 0 1-1.903 0a.95.95 0 1 1 1.903 0m-8.244 5.644a3.803 3.803 0 1 1 0-7.606a3.803 3.803 0 0 1 0 7.606m0-14.614a3.803 3.803 0 1 1 7.607 0a3.803 3.803 0 0 1-7.607 0m9.683 22.22a3.804 3.804 0 1 1 .002-7.608a3.804 3.804 0 0 1-.002 7.608m9.684-15.212a3.805 3.805 0 0 1 3.804 3.803a3.804 3.804 0 0 1-7.608 0a3.804 3.804 0 0 1 3.804-3.803m-3.298 16.705a16.636 16.636 0 0 0 9.252-9.806c.941 4.377 3.922 7.987 7.898 9.806h-17.15m14.783-7.501a3.217 3.217 0 1 1 0-6.436a3.218 3.218 0 1 1 0 6.436m0-12.368a3.217 3.217 0 0 1 3.219-3.218a3.217 3.217 0 1 1 0 6.435a3.215 3.215 0 0 1-3.219-3.217m4.975 15.585a3.217 3.217 0 0 1 3.219-3.217a3.218 3.218 0 1 1-3.219 3.217"/></svg>
        </div>
    </header>
  )
}
