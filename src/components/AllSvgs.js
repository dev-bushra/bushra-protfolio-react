// Social Media icons
export const Email = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601C7.777 5.205 5 8.354 5 12.278c0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" />
  </svg>
)

export const LinkedIn = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
  </svg>
)

export const GitHub = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

// Other icons
export const Minimize = ({size=24, color="#dae4fb"}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
  <path 
    d="M4 14h6v6M3 21l6.1-6.1M20 10h-6V4M21 3l-6.1 6.1"
  />
</svg>);

export const PowerBtn = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="power-off"
      className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
      />
    </svg>
  )
}

export const BigLogo = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <path
      fill="#2f406a"
      d="M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36"
    />
    <path
      fill="#2379bd"
      d="m26.4 86.4 37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4"
    />
    <path
      fill="#03afef"
      d="m26.4 42.32-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32"
    />
    <path
      fill="#2f406a"
      d="m63.53 81.33-.41-.42V64.27l.41-.21.1-.41 14.27-8.32.44.1v17.15l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M48.48 73.11V55.3h.41l14.51 8.45.12.33v17.25l-15.04-8.22"
    />
    <path
      fill="#03afef"
      d="M63.29 46.54 48.48 55.3l15.05 8.76 14.8-8.64-15.04-8.88"
    />
    <path
      fill="#2f406a"
      d="m45.11 92.19-.41-.42V75.13l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M30.06 84V66.16h.41L45 74.59l.12.33v17.27L30.06 84"
    />
    <path
      fill="#03afef"
      d="m44.86 57.4-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
    />
    <path
      fill="#2f406a"
      d="m83.27 92.6-.41-.42V75.54l.41-.21.1-.41 14.27-8.32.44.1v17.14L83.27 92.6"
    />
    <path
      fill="#2379bd"
      d="M68.22 84.38V66.57h.41L83.15 75l.12.33V92.6l-15.05-8.22"
    />
    <path
      fill="#03afef"
      d="m83 57.81-14.8 8.76 15.05 8.76 14.8-8.64L83 57.81"
    />
    <path
      fill="#2f406a"
      d="m64.85 103.46-.41-.42V86.4l.41-.21.1-.41 14.27-8.32.44.1V94.7l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M49.8 95.23v-17.8h.41l14.51 8.45.12.33v17.27L49.8 95.23"
    />
    <path
      fill="#03afef"
      d="m64.6 68.67-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
    />
    <path
      fill="#2f406a"
      d="m63.53 57.73-.41-.42V40.67l.41-.21.1-.41 14.27-8.33.44.1V49l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M48.48 49.5V31.7h.41l14.51 8.45.12.33v17.25L48.48 49.5"
    />
    <path
      fill="#03afef"
      d="M63.29 22.94 48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88"
    />
    <path
      fill="#2f406a"
      d="m45.11 68.59-.41-.42V51.53l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23"
    />
    <path
      fill="#03afef"
      d="m44.86 33.8-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
    />
    <path
      fill="#2f406a"
      d="m83.27 69-.41-.42V51.94l.41-.21.1-.41L97.64 43l.44.1v17.14L83.27 69"
    />
    <path
      fill="#2379bd"
      d="M68.22 60.77V43h.41l14.51 8.45.12.33V69l-15.04-8.23"
    />
    <path fill="#03afef" d="M83 34.21 68.22 43l15.05 8.76 14.8-8.64L83 34.21" />
    <path
      fill="#2f406a"
      d="m64.85 79.85-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
    />
    <path
      fill="#2379bd"
      d="M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63"
    />
    <path
      fill="#03afef"
      d="m64.6 45.06-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
    />
  </svg>
)

export const Anchor = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="anchor"
      className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
      />
    </svg>
  )
}

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      
    >
      <path
        fill={props.fill}
        
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  )
}

export const Design = (props) => { 
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  )

}

export const Develope = (props) => { 
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
         fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  )

}
