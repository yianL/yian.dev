const PpdLogo = ({ width = 240, height = 240 }): JSX.Element => {
  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 810 810"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 fill-brand-200"
      >
        <path
          d="m 714.10547,510.56641 c -11.61719,33.89843 -28.95703,65.82421 -51,94.10546 -22.03125,28.29297 -48.75391,52.92188 -78.75391,72.55469 -29.96875,19.65625 -63.21484,34.26172 -97.94531,43.02344 -34.72656,8.78906 -70.96094,11.70703 -106.71484,8.78516 -35.73438,-2.89454 -70.92579,-11.79297 -103.72266,-26.20704 -32.80859,-14.39843 -63.1875,-34.33203 -89.55469,-58.6289 -26.375,-24.29297 -48.71875,-52.95313 -65.80078,-84.46875 C 103.51953,528.22656 91.746094,493.875 85.894531,458.51172 c -5.839843,-35.35547 -5.839843,-71.76953 0,-107.1211 5.851563,-35.36328 17.624999,-69.71093 34.718749,-101.21875 17.08203,-31.51562 39.42578,-60.17578 65.80078,-84.46875 26.36719,-24.30468 56.7461,-44.23046 89.55469,-58.62499 32.79687,-14.417974 67.98828,-23.316411 103.72266,-26.214849 35.7539,-2.921875 71.98828,0 106.71484,8.789063 34.73047,8.757812 67.97656,23.367186 97.94531,43.031246 30,19.625 56.72266,44.25391 78.75391,72.54688 22.04297,28.27344 39.38281,60.20703 51,94.10937 11.65625,33.88672 17.53125,69.71485 17.52734,105.60938 0.004,35.89453 -5.87109,71.72656 -17.52734,105.61719 z m 79.20703,-55.8086 c -11.82813,-6.32422 -23.76563,-12.20312 -35.84375,-17.64062 0.96094,-10.69141 1.44141,-21.42969 1.45312,-32.16797 -0.0117,-10.54297 -0.47656,-21.10156 -1.39843,-31.61328 12.07422,-5.40625 24.03906,-11.27344 35.86328,-17.58594 1.02734,-0.12109 1.73437,-1.14844 1.57812,-2.28125 -1.10937,-8.46875 -2.49609,-16.90234 -4.17187,-25.28906 -0.21485,-1.125 -1.21485,-1.86328 -2.22656,-1.66407 -13.22266,-2.16796 -26.42579,-3.88281 -39.60157,-5.125 -2.54297,-10.43359 -5.5625,-20.75781 -9.05078,-30.92187 -3.42187,-9.99219 -7.29297,-19.81641 -11.62109,-29.44141 9.65234,-9.05859 19.07031,-18.51172 28.17187,-28.33593 0.91797,-0.45704 1.26563,-1.66407 0.7461,-2.67969 -3.82813,-7.64453 -7.88672,-15.17188 -12.19141,-22.54297 -0.58594,-0.98438 -1.77344,-1.36719 -2.66016,-0.84375 -13.20312,2.26953 -26.25,4.97266 -39.10546,8.10547 -5.80469,-9.03906 -12.02735,-17.81641 -18.61719,-26.28125 -6.49219,-8.32422 -13.33985,-16.36719 -20.55078,-24.07813 6.19922,-11.69922 12.01953,-23.67578 17.46875,-35.92578 0.72265,-0.72656 0.66015,-1.96093 -0.15235,-2.76953 -6.07812,-6 -12.36718,-11.77344 -18.82031,-17.36328 -0.86719,-0.75391 -2.11328,-0.71484 -2.78125,0.0664 -11.75,6.40234 -23.22266,13.17968 -34.38672,20.3125 -8.41406,-6.67969 -17.125,-12.97266 -26.10547,-18.85547 -8.82422,-5.78516 -17.91406,-11.175784 -27.23047,-16.128909 2.07032,-13.070312 3.71485,-26.324219 4.88282,-39.660156 0.45312,-0.917969 -0.0117,-2.085937 -1.04297,-2.578125 -7.71094,-3.6875 -15.52344,-7.148438 -23.46094,-10.324219 -1.0625,-0.425781 -2.23047,0 -2.60156,0.960938 -9.0625,9.890625 -17.69922,20.019531 -25.9375,30.386719 C 513.78125,68.914062 503.49219,65.8125 493.08984,63.183594 482.85547,60.59375 472.49609,58.46875 462.07812,56.828125 459.76953,43.78125 456.99219,30.742188 453.75391,17.753906 c 0.1289,-1.023437 -0.69922,-1.964844 -1.83594,-2.097656 -8.48047,-0.980469 -16.98828,-1.683594 -25.5,-2.105469 -1.14063,-0.0625 -2.10156,0.734375 -2.15235,1.769531 -5.32421,12.273438 -10.19531,24.683594 -14.62109,37.171876 -10.73047,-0.105469 -21.47266,0.292968 -32.17187,1.160156 -10.52344,0.859375 -20.9961,2.191406 -31.38672,4 -6.39063,-11.605469 -13.23047,-23.050782 -20.48828,-34.304688 -0.20704,-1.007812 -1.29688,-1.632812 -2.41407,-1.394531 -8.34375,1.824219 -16.64062,3.898437 -24.85937,6.257813 -1.09766,0.324218 -1.75391,1.382812 -1.46485,2.367187 -1.07031,13.363281 -1.68359,26.664063 -1.8125,39.917969 -10.1914,3.394531 -20.21484,7.265625 -30.05468,11.585937 -9.66016,4.238281 -19.12891,8.933594 -28.36719,14.027344 -9.82813,-8.878906 -20.01953,-17.464844 -30.55469,-25.730469 -0.52734,-0.886718 -1.7539,-1.125 -2.73437,-0.53125 -7.28516,4.449219 -14.44532,9.109375 -21.4336,14.011719 -0.93359,0.667969 -1.21484,1.871094 -0.60937,2.714844 3.34375,12.980469 7.10937,25.761721 11.28515,38.324221 -8.53125,6.53125 -16.7539,13.44922 -24.65234,20.72656 -7.75781,7.14844 -15.19922,14.64844 -22.29687,22.45703 -12.16016,-5.22266 -24.57422,-10.04297 -37.22657,-14.46484 -0.78125,-0.66407 -2.01562,-0.49219 -2.75,0.38672 -5.47656,6.55078 -10.710934,13.28906 -15.753902,20.18359 -0.671876,0.92187 -0.539063,2.16406 0.300781,2.76953 7.339843,11.19141 15.039061,22.07422 23.058591,32.625 -5.96093,8.92578 -11.51172,18.13672 -16.636716,27.57422 -5.023438,9.28516 -9.628906,18.78906 -13.804688,28.48828 -13.210937,-0.98828 -26.519531,-1.51562 -39.914062,-1.57812 -0.960938,-0.3711 -2.066406,0.1914 -2.480469,1.26171 -3.039063,7.98829 -5.835937,16.07032 -8.339844,24.25 -0.332031,1.09375 0.1875,2.21875 1.179688,2.51954 10.601562,8.19921 21.402343,15.97265 32.433593,23.33203 -2.722656,10.38281 -4.964843,20.90234 -6.726562,31.5039 -1.710938,10.41407 -2.964844,20.89844 -3.761719,31.42969 -12.800781,3.36719 -25.546875,7.21094 -38.246093,11.50391 -1.03125,-0.0508 -1.894532,0.84765 -1.925782,1.99218 -0.285156,8.52735 -0.292968,17.03907 -0.02344,25.56641 0.03516,1.14453 0.898437,2.03516 1.925781,2 12.699219,4.30469 25.425781,8.17188 38.230469,11.55859 0.785156,10.71485 2.050781,21.38672 3.800781,31.99219 1.730469,10.41016 3.925781,20.73828 6.578125,30.96094 -11.035156,7.34375 -21.84375,15.09375 -32.464844,23.27734 -0.988281,0.29688 -1.515625,1.42188 -1.179687,2.52344 2.484375,8.17578 5.269531,16.25781 8.292968,24.26172 0.40625,1.06641 1.527344,1.63281 2.488282,1.26172 13.386718,-0.043 26.710937,-0.55078 39.910156,-1.51172 4.234375,9.86719 8.910156,19.55469 14.027344,28.99609 5.035159,9.27735 10.488289,18.32422 16.324219,27.11719 -8.03906,10.53125 -15.742188,21.40234 -23.109375,32.58203 -0.835938,0.60547 -0.972657,1.83985 -0.296876,2.76172 5.023438,6.90625 10.257813,13.65234 15.714851,20.21484 0.73437,0.875 1.96875,1.05079 2.74609,0.39063 12.66797,-4.41016 25.07812,-9.20313 37.26172,-14.40234 7.20312,7.95703 14.76562,15.58984 22.66406,22.86718 7.76563,7.14844 15.83984,13.96094 24.20313,20.39063 -4.19141,12.55469 -7.97657,25.32812 -11.34375,38.29687 -0.60157,0.84375 -0.32422,2.05469 0.60937,2.71875 6.97656,4.91407 14.13672,9.58985 21.41016,14.04688 0.98047,0.59765 2.20703,0.35547 2.73437,-0.52735 10.54688,-8.23828 20.76172,-16.82421 30.59766,-25.67187 9.39844,5.19141 19.02734,9.97266 28.85547,14.29297 9.66797,4.24219 19.52343,8.05469 29.52343,11.40625 0.10938,13.25781 0.70313,26.54687 1.75391,39.91797 -0.29297,0.98437 0.36328,2.04687 1.46094,2.36718 8.21094,2.37891 16.50781,4.46485 24.84765,6.30469 1.11719,0.23828 2.20704,-0.39062 2.41016,-1.39453 7.28516,-11.23437 14.13281,-22.69141 20.54688,-34.26953 10.57031,1.85937 21.23437,3.21875 31.9375,4.08594 10.51562,0.86328 21.0664,1.26172 31.62109,1.16797 4.40234,12.5039 9.25391,24.91015 14.5625,37.20312 0.0469,1.02734 1.00781,1.81641 2.15234,1.77344 8.51563,-0.40625 17.01172,-1.11719 25.50391,-2.06641 1.13281,-0.13281 1.95703,-1.07422 1.82812,-2.08984 3.27344,-12.99219 6.06641,-26.03516 8.39063,-39.0625 10.61328,-1.66406 21.14062,-3.8125 31.55859,-6.44922 10.21875,-2.58594 20.34375,-5.625 30.29688,-9.12891 8.21875,10.3711 16.85547,20.53125 25.88672,30.4336 0.3789,0.96093 1.54687,1.39453 2.60547,0.96484 7.9414,-3.16016 15.75781,-6.60547 23.47656,-10.28516 1.03906,-0.49218 1.5039,-1.66015 1.05469,-2.58203 -1.14844,-13.34375 -2.76954,-26.58203 -4.82032,-39.66406 9.48047,-5.03125 18.73828,-10.50391 27.71875,-16.39062 8.82032,-5.77735 17.39063,-11.95313 25.66407,-18.50391 11.15625,7.14844 22.61328,13.92578 34.36328,20.35937 0.66797,0.78907 1.91015,0.82032 2.77734,0.0742 6.46875,-5.57422 12.75391,-11.35156 18.84375,-17.32812 0.80469,-0.8086 0.87891,-2.04297 0.15625,-2.78125 -5.42187,-12.25 -11.22266,-24.22656 -17.40625,-35.95703 7.34375,-7.83985 14.32422,-16 20.92969,-24.47657 6.48047,-8.32421 12.59765,-16.93359 18.3164,-25.80859 12.85157,3.14844 25.89844,5.87891 39.08985,8.14453 0.88672,0.53516 2.07812,0.16797 2.65234,-0.83203 4.32813,-7.35547 8.40625,-14.86719 12.23438,-22.51172 0.52734,-1.01562 0.18359,-2.22656 -0.7461,-2.67969 -9.08984,-9.83984 -18.47656,-19.30468 -28.11718,-28.375 4.42187,-9.80078 8.35937,-19.80078 11.84765,-29.95703 3.41797,-9.99218 6.40235,-20.13281 8.91406,-30.38281 13.17188,-1.21875 26.38672,-2.90625 39.61719,-5.06641 1.00781,0.20704 2.01172,-0.53125 2.22656,-1.65625 1.6875,-8.3789 3.09375,-16.8125 4.21094,-25.27734 0.15235,-1.13672 -0.55469,-2.17187 -1.57031,-2.29297"
          fillRule="nonzero"
          id="path2"
        />
        <path
          d="m 690.06641,502.31641 c -10.6836,31.22656 -26.66407,60.65625 -46.9961,86.73046 -20.32422,26.08985 -44.98047,48.81641 -72.63281,66.91407 -27.63281,18.12109 -58.25781,31.57422 -90.25,39.64062 -31.96875,8.10547 -65.41406,10.79688 -98.42188,8.09766 -32.96093,-2.67188 -65.35546,-10.86719 -95.57421,-24.14453 -30.22657,-13.26953 -58.2461,-31.64453 -82.5625,-54.05078 -24.33204,-22.41016 -44.94141,-48.84375 -60.67579,-77.89454 -15.7539,-29.03125 -26.60156,-60.66406 -31.99218,-93.25 -5.38281,-32.5664 -5.38281,-66.2539 0,-98.8164 5.39062,-32.58594 16.23828,-64.21875 31.99218,-93.25 15.73438,-29.05078 36.34375,-55.48438 60.67579,-77.88672 24.3164,-22.42188 52.33593,-40.79297 82.5625,-54.05859 30.21875,-13.27735 62.61328,-21.47266 95.57421,-24.14453 33.00782,-2.69922 66.45313,0 98.42188,8.09765 31.99219,8.06641 62.61719,21.51953 90.25,39.64063 27.65234,18.09765 52.30859,40.82421 72.63281,66.91015 20.33203,26.08594 36.3125,55.50781 46.9961,86.73047 10.73437,31.22656 16.16406,64.21094 16.15234,97.36719 0.0117,33.16015 -5.41797,66.14453 -16.15234,97.36719 z m -37.33204,-289 c -21.14062,-27.14844 -46.80468,-50.78516 -75.57812,-69.62891 -28.76953,-18.86328 -60.65234,-32.875 -93.97266,-41.26953 -33.29297,-8.441408 -68.08593,-11.238282 -102.41406,-8.429689 -34.30078,2.769531 -68.04687,11.308599 -99.51562,25.144529 -31.46485,13.8086 -60.6211,32.92578 -85.92579,56.2461 -25.3164,23.32031 -46.76171,50.83593 -63.14843,81.0625 -16.40235,30.23828 -27.69531,63.17578 -33.308596,97.08984 -5.609375,33.91797 -5.609375,68.91406 0,102.82031 5.613286,33.9336 16.906246,66.875 33.308596,97.09766 16.38672,30.24609 37.83203,57.76172 63.14843,81.0664 25.30469,23.32813 54.46094,42.44532 85.92579,56.26172 31.46875,13.82813 65.21484,22.36719 99.51562,25.13672 34.32813,2.8086 69.12109,0.008 102.41406,-8.42578 33.32032,-8.39844 65.20313,-22.41016 93.97266,-41.27344 28.77344,-18.84375 54.4375,-42.48437 75.57812,-69.6289 21.16016,-27.14063 37.78907,-57.77735 48.92188,-90.28907 11.18359,-32.51171 16.82031,-66.86718 16.82031,-101.34765 0,-34.47656 -5.63672,-68.82813 -16.82031,-101.34375 -11.13281,-32.51172 -27.76172,-63.14453 -48.92188,-90.28906"
          fillRule="nonzero"
          id="path3"
        />
      </svg>

      <svg
        width={width}
        height={height}
        viewBox="0 0 800 800"
        version="1.1"
        id="ppd-base"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <g
          id="background"
          transform="matrix(1.3571081,0,0,1.3571081,-414.57946,-421.41946)"
          className="fill-brand-50"
        >
          <path
            d="m 579.4975,358.0715 c -48.635,8.807 -90.7445,47.1475 -109.3355,101.0845 -2.15,6.239 -4.481,13.899 -5.179,17.023 l -1.269,5.678 -14.107,0.322 c -13.374,0.304 -14.445,0.482 -20.607,3.416 -11.323,5.39 -18.921,15.044 -21.572,27.405 -1.951,9.101 -1.951,56.899 0,66 1.717,8.007 5.141,14.234 10.772,19.589 10.293,9.788 17.34312,15.93372 44.78517,17.1273 l 19.20454,0.83529 8.3499,11.856 -185.35025,-0.47835 c 9.14566,14.42394 23.59314,37.4007 32.16253,52.19104 -9.22281,14.40296 -21.44396,34.28339 -31.13489,48.37972 l 73.914,0.256 68.65306,0.257 -3.912,7.243 c -8.827,16.345 -6.529,25.50854 -6.538,65.45054 l -0.24713,24.79338 c 29.35819,-0.22373 29.51207,-0.47826 47.76087,-0.47826 l 1.6547,11.48084 40.57881,0.002 1.15842,-68.85492 c 1.67,-1.512 -4.44473,-2.65 70.93427,-2.65 78.67,0 62.69301,2.5725 64.27101,4.3165 l 2.65,65.72392 47.39249,-0.995 0.4975,-9.5125 46.01,-0.995 L 760,802.224 c -0.72956,-16.36074 -0.457,-33.418 -1.015,-37.868 -1.28177,-12.81756 -0.42837,-23.79443 -6.6085,-34.8455 l 67.4865,-0.7545 73.954,-0.256 c -9.12815,-14.48367 -22.79988,-33.73427 -31.3045,-48.612 9.18782,-14.37559 21.5654,-38.26559 31.2615,-52.30799 l -182.39951,-0.0115 6.61801,-9.37351 25.9875,-1.428 c 26.23688,-1.44171 26.757,-4.965 35.465,-11.551 6.293,-4.759 8.762,-13.59 11.701,-20.934 2.246,-5.611 2.315,-6.714 2.334,-37.282 0.021,-33.644 -0.354,-36.945 -5.189,-45.594 -3.258,-5.83 -11.312,-13.058 -18.073,-16.22 -5.191,-2.428 -7.023,-2.706 -19.89,-3.022 l -14.173,-0.348 -1.196,-5.158 c -4.302,-18.558 -14.862,-42.899 -25.353,-58.44 -22.003,-32.596 -51.585,-52.503 -87.331,-58.737 m -49.59561,453.35026 v 20.70969 h 26.07686 26.07686 v -20.70969 -20.7097 h -26.07686 -26.07686 v 20.7097"
            fillRule="evenodd"
            id="path2"
          />
        </g>
        <g
          id="base"
          transform="matrix(1.2699491,0,0,1.2699491,-364.65785,-371.08923)"
          className="fill-brand-200"
        >
          <path
            d="m 579,357.574 c -48.635,8.807 -90.247,47.645 -108.838,101.582 -2.15,6.239 -4.481,13.899 -5.179,17.023 l -1.269,5.678 -14.107,0.322 c -13.374,0.304 -14.445,0.482 -20.607,3.416 -11.323,5.39 -18.921,15.044 -21.572,27.405 -1.951,9.101 -1.951,56.899 0,66 1.717,8.007 5.141,14.234 10.772,19.589 10.293,9.788 16.555,11.411 44.023,11.411 h 20.802 l 3.359,5.25 c 4.326,6.759 9.864,13.744 17.07,21.527 l 5.753,6.213 -101.495,0.255 -101.495,0.255 14.391,20.933 C 328.524,675.946 335,685.651 335,686 c 0,0.349 -6.476,10.054 -14.392,21.567 l -14.391,20.933 73.914,0.256 73.914,0.257 -3.912,7.243 c -8.827,16.345 -10.116,24.552 -10.125,64.494 L 440,832 h 24 24 v 6 6 h 13 13 v -37.345 c 0,-34.909 0.119,-37.453 1.829,-39 1.67,-1.512 8.966,-1.655 84.345,-1.655 78.67,0 82.593,0.085 84.171,1.829 1.478,1.632 1.655,5.815 1.655,39 V 844 h 13 13 v -6 -6 h 24 24 v -29.776 c 0,-16.377 -0.457,-33.418 -1.015,-37.868 -1.225,-9.776 -4.706,-20.378 -9.512,-28.97 l -3.564,-6.373 73.954,-0.257 73.954,-0.256 -14.409,-20.978 C 871.484,695.984 865,686.236 865,685.858 c 0,-0.377 6.474,-10.062 14.387,-21.522 l 14.387,-20.836 -101.399,-0.255 -101.398,-0.254 8.261,-9.406 c 4.544,-5.172 10.287,-12.542 12.762,-16.377 l 4.5,-6.973 23.5,-0.433 c 26.272,-0.484 28.747,-0.985 37.455,-7.571 6.293,-4.759 10.752,-10.605 13.691,-17.949 2.246,-5.611 2.315,-6.714 2.334,-37.282 0.021,-33.644 -0.354,-36.945 -5.189,-45.594 -3.258,-5.83 -11.312,-13.058 -18.073,-16.22 -5.191,-2.428 -7.023,-2.706 -19.89,-3.022 l -14.173,-0.348 -1.196,-5.158 c -4.302,-18.558 -14.862,-42.899 -25.353,-58.44 -22.003,-32.596 -54.57,-54.493 -90.316,-60.727 -10.395,-1.812 -30.044,-1.772 -40.29,0.083 m 70.321,106.485 c -3.948,1.99 -11.598,4.703 -17,6.03 -8.995,2.208 -11.838,2.411 -33.821,2.411 -21.996,0 -24.752,-0.197 -33,-2.356 -4.95,-1.296 -12.047,-3.846 -15.772,-5.667 l -6.772,-3.311 -2.119,4.167 c -9.719,19.114 -27.334,33.098 -48.21,38.269 l -6.872,1.703 0.529,20.097 c 0.441,16.734 0.949,21.856 3.034,30.598 8.954,37.537 29.011,65.845 58.602,82.708 l 7.532,4.292 h 43.802 43.803 l 6.222,-3.137 c 25.457,-12.836 46.633,-38.099 56.662,-67.601 5.837,-17.169 7.139,-25.033 7.755,-46.857 l 0.568,-20.096 -6.829,-1.715 c -7.596,-1.908 -19.14,-6.963 -25.006,-10.949 -9.08,-6.169 -18.281,-16.844 -23.425,-27.174 l -2.504,-5.03 -7.179,3.618 m -207.202,43.944 c -1.86,0.439 -4.785,2.201 -6.5,3.915 l -3.119,3.118 -0.291,29.773 c -0.291,29.719 -0.287,29.779 2.03,33.217 3.357,4.982 6.019,5.943 16.511,5.959 L 460,584 V 545.5 507 l -7.25,0.102 c -3.988,0.057 -8.772,0.462 -10.631,0.901 M 740,545.381 V 584 l 9.25,-0.004 c 7.513,-0.003 9.872,-0.382 12.56,-2.022 5.799,-3.535 6.19,-5.824 6.188,-36.192 -0.001,-23.998 -0.212,-27.695 -1.75,-30.711 -3.061,-6.004 -6.084,-7.428 -16.76,-7.895 L 740,506.761 v 38.62 M 473.454,654.26 c -0.266,0.694 -0.365,14.981 -0.219,31.75 l 0.265,30.49 11.223,0.282 c 11.189,0.282 11.224,0.276 11.84,-2.177 0.34,-1.354 0.322,-3.393 -0.04,-4.533 -0.576,-1.813 -1.461,-2.072 -7.09,-2.072 H 483 l -0.14,-22.25 c -0.157,-24.977 -0.304,-28.86 -1.183,-31.148 -0.747,-1.948 -7.5,-2.228 -8.223,-0.342 M 555,653.653 c -6.892,2.764 -8.225,8.88 -7.659,35.128 0.369,17.098 0.699,20.478 2.261,23.122 3.446,5.835 13.764,7.708 19.99,3.629 5.317,-3.484 5.548,-4.679 5.448,-28.199 -0.051,-11.999 -0.526,-23.425 -1.055,-25.39 -1.538,-5.71 -5.03,-8.268 -11.749,-8.605 -3.155,-0.158 -6.411,-0.016 -7.236,0.315 m -205.231,0.965 c -0.282,0.485 -0.683,14.607 -0.891,31.382 l -0.378,30.5 3.898,0.319 c 2.443,0.2 4.211,-0.173 4.735,-1 0.46,-0.725 0.843,-6.531 0.852,-12.902 L 358,691.333 h 4.421 c 9.109,0 12.946,-5.4 13.026,-18.333 0.091,-14.576 -2.883,-17.874 -16.909,-18.749 -4.541,-0.284 -8.487,-0.118 -8.769,0.367 m 30.787,0.291 c -0.331,0.536 -0.296,14.692 0.079,31.458 0.597,26.714 0.878,30.525 2.273,30.825 0.876,0.188 5.867,0.11 11.092,-0.175 l 9.5,-0.517 0.324,-3.395 c 0.41,-4.294 -0.822,-5.07 -8.074,-5.09 L 390,708 v -9.445 -9.445 l 4.648,-0.305 c 5.282,-0.347 6.995,-2.108 5.98,-6.15 C 400.019,680.226 399.537,680 394.981,680 H 390 v -8.452 -8.453 l 6.25,-0.297 6.25,-0.298 v -4 -4 l -10.671,-0.283 c -6.179,-0.164 -10.924,0.127 -11.273,0.692 m 27.897,0.352 c -0.266,0.693 -0.364,14.756 -0.218,31.25 l 0.265,29.989 7.5,0.315 c 10.916,0.459 14.341,-0.823 17.029,-6.376 2.091,-4.319 2.174,-5.509 1.786,-25.734 -0.458,-23.901 -1.16,-26.698 -7.349,-29.284 -4.358,-1.82 -18.33,-1.938 -19.013,-0.16 m 39.051,-0.059 c -0.448,1.236 -3.711,22.351 -7.465,48.298 -0.955,6.6 -1.414,12.368 -1.019,12.818 0.394,0.45 2.459,0.675 4.59,0.5 l 3.873,-0.318 0.75,-5.5 c 1.363,-9.989 1.369,-10 5.714,-10 h 3.909 l 0.63,5.75 c 0.986,8.991 1.783,10.25 6.493,10.25 3.021,0 4.021,-0.398 4.021,-1.602 0,-2.658 -7.075,-54.67 -7.876,-57.898 -0.715,-2.886 -0.98,-3.011 -6.947,-3.298 -4.397,-0.211 -6.34,0.08 -6.673,1 m 69.794,0.408 c -0.411,1.04 -0.759,15.165 -0.773,31.39 l -0.025,29.5 4.153,0.303 c 4.135,0.301 4.156,0.285 4.831,-3.706 0.372,-2.205 0.595,-5.491 0.495,-7.303 -0.1,-1.812 -0.136,-5.807 -0.08,-8.877 L 526,691.333 h 4.281 c 9.121,0 12.957,-5.767 12.957,-19.479 0,-13.647 -2.94,-16.745 -16.708,-17.604 -7.667,-0.478 -8.558,-0.347 -9.232,1.36 m 61.708,1.14 c 0.004,1.513 1.122,11.525 2.486,22.25 1.364,10.725 2.982,23.55 3.596,28.5 0.614,4.95 1.633,9.357 2.264,9.794 1.2,0.83 10.296,0.391 11.229,-0.542 0.296,-0.295 1.031,-6.44 1.635,-13.655 0.996,-11.904 1.888,-15.752 2.281,-9.84 0.805,12.109 1.894,21.553 2.652,22.993 0.704,1.337 2.196,1.75 6.327,1.75 2.973,0 5.629,-0.36 5.901,-0.801 0.272,-0.441 1.422,-9.103 2.554,-19.25 2.813,-25.205 4.047,-35.773 4.695,-40.199 l 0.55,-3.75 h -3.966 c -2.181,0 -4.442,0.575 -5.025,1.277 -0.583,0.702 -1.757,8.915 -2.61,18.25 -0.853,9.335 -1.868,18.998 -2.257,21.473 -0.68,4.329 -0.733,4.196 -1.409,-3.5 -1.294,-14.744 -2.939,-30.97 -3.472,-34.25 -0.49,-3.02 -0.803,-3.25 -4.423,-3.25 -2.143,0 -4.104,0.337 -4.357,0.75 -0.254,0.413 -1.288,10.109 -2.298,21.548 -1.01,11.439 -2.147,19.989 -2.526,19 -0.38,-0.989 -1.411,-8.773 -2.291,-17.298 -0.88,-8.525 -1.84,-17.413 -2.133,-19.75 L 587.877,654 h -4.438 c -4.177,0 -4.439,0.162 -4.433,2.75 m 50.661,-2.083 C 629.3,655.033 629,668.968 629,685.631 c 0,27.868 0.14,30.366 1.75,31.142 0.962,0.464 6.161,0.661 11.553,0.437 l 9.802,-0.407 -0.302,-4.151 -0.303,-4.152 -6.25,-0.298 -6.25,-0.297 v -9.398 -9.397 l 4.75,-0.305 4.75,-0.305 v -4 -4 l -4.63,-0.3 c -4.522,-0.293 -4.641,-0.386 -5.092,-4 -0.397,-3.185 -0.364,-6.988 0.104,-11.95 0.077,-0.815 1.831,-1.25 5.036,-1.25 2.705,0 5.63,-0.273 6.5,-0.607 1.869,-0.717 2.12,-5.455 0.382,-7.193 -1.279,-1.279 -19.917,-1.75 -21.133,-0.533 m 27,0 c -0.978,0.977 -0.785,60.598 0.2,62.152 0.524,0.827 2.292,1.2 4.735,1 l 3.898,-0.319 0.315,-13 0.315,-13 4.685,13 c 4.054,11.249 5.002,13.045 7.037,13.333 3.552,0.503 7.148,-0.686 7.148,-2.363 0,-0.821 -2.025,-6.531 -4.5,-12.688 -2.475,-6.157 -4.5,-11.571 -4.5,-12.03 0,-0.46 0.938,-1.829 2.085,-3.044 4.361,-4.619 5.163,-7.527 4.721,-17.125 C 682.163,656.624 679.466,654 665.762,654 c -4.636,0 -8.729,0.3 -9.095,0.667 m 31.867,2.583 c -0.306,1.788 -0.378,4.6 -0.159,6.25 0.218,1.65 0.448,14.122 0.511,27.715 0.104,22.474 0.273,24.793 1.864,25.581 0.962,0.476 6.025,0.604 11.25,0.285 l 9.5,-0.581 0.324,-3.395 c 0.403,-4.22 -0.84,-5.07 -7.449,-5.09 -4.936,-0.014 -5.148,-0.13 -5.75,-3.14 -0.344,-1.719 -0.625,-5.97 -0.625,-9.448 v -6.322 l 5.25,-0.303 5.25,-0.302 v -4 -4 l -5.25,-0.302 -5.25,-0.303 V 671.448 663 h 5.878 c 6.147,0 8.089,-1.11 7.571,-4.328 -0.74,-4.588 -0.954,-4.672 -11.872,-4.672 h -10.486 l -0.557,3.25 m 27.957,-2.088 c -0.287,0.748 -0.402,14.855 -0.256,31.349 l 0.265,29.989 8.725,0.289 c 10.348,0.342 14.19,-1.144 16.354,-6.323 1.844,-4.415 1.936,-43.173 0.115,-48.372 -2.022,-5.771 -5.538,-7.543 -15.759,-7.943 -6.847,-0.268 -9.043,-0.033 -9.444,1.011 M 765,685.5 V 717 h 9.423 c 8.665,0 9.67,-0.207 12.482,-2.574 1.682,-1.415 3.558,-4.238 4.167,-6.273 1.596,-5.325 0.862,-44.879 -0.889,-47.957 -2.591,-4.553 -6.929,-6.188 -16.433,-6.192 L 765,654 v 31.5 m 33.667,-30.833 C 798.3,655.033 798,668.968 798,685.631 c 0,27.868 0.14,30.366 1.75,31.142 0.962,0.464 6.161,0.661 11.553,0.437 l 9.802,-0.407 -0.302,-4.151 -0.303,-4.152 -6.25,-0.298 -6.25,-0.297 v -9.398 -9.397 l 4.75,-0.305 4.75,-0.305 v -4 -4 l -4.63,-0.3 c -4.522,-0.293 -4.641,-0.386 -5.092,-4 -0.397,-3.185 -0.364,-6.988 0.104,-11.95 0.077,-0.815 1.831,-1.25 5.036,-1.25 2.705,0 5.63,-0.273 6.5,-0.607 1.869,-0.717 2.12,-5.455 0.382,-7.193 -1.279,-1.279 -19.917,-1.75 -21.133,-0.533 m 24.346,1.526 c 0.007,1.269 1.613,13.107 3.568,26.307 1.955,13.2 3.808,26.025 4.118,28.5 0.309,2.475 1.009,5.063 1.554,5.75 1.033,1.302 6.664,1.647 10.423,0.639 2.268,-0.608 2.752,-2.466 5.307,-20.389 0.51,-3.575 1.641,-11 2.512,-16.5 2.873,-18.119 3.446,-24.916 2.172,-25.727 -0.642,-0.408 -2.594,-0.749 -4.338,-0.758 -2.654,-0.013 -3.266,0.432 -3.758,2.735 -0.717,3.354 -2.387,16.464 -3.2,25.126 -0.329,3.506 -1.127,9.793 -1.772,13.969 l -1.174,7.593 -2.295,-17.969 c -1.262,-9.883 -2.822,-20.894 -3.465,-24.469 l -1.171,-6.5 -4.247,-0.307 c -3.861,-0.28 -4.246,-0.098 -4.234,2 m -263.763,5.893 c -2.544,0.961 -2.37,-0.91 -2.297,24.602 0.054,18.975 0.712,22.312 4.4,22.312 4.568,0 4.971,-1.756 4.302,-18.767 -0.34,-8.653 -0.626,-18.305 -0.637,-21.448 -0.02,-6.351 -1.656,-8.252 -5.768,-6.699 m -201.036,10.664 0.286,9.75 2.917,-0.211 c 3.909,-0.283 4.55,-1.612 4.568,-9.468 0.017,-7.394 -1.365,-9.821 -5.593,-9.821 h -2.464 l 0.286,9.75 M 417,685.5 V 708 h 3.441 c 1.893,0 3.741,-0.486 4.108,-1.08 1.135,-1.835 0.471,-41.191 -0.718,-42.624 C 423.239,663.583 421.46,663 419.878,663 H 417 v 22.5 m 109,-12.392 v 10.109 l 2.75,-0.663 c 4.085,-0.985 5.25,-3.243 5.25,-10.174 0,-6.911 -1.467,-9.38 -5.571,-9.38 -2.412,0 -2.429,0.072 -2.429,10.108 m 139,-3.233 c 0,3.781 0.267,8.211 0.594,9.843 0.513,2.568 0.952,2.904 3.25,2.491 4.412,-0.793 5.156,-2.035 5.156,-8.609 0,-7.464 -1.792,-10.6 -6.057,-10.6 H 665 v 6.875 m 60.849,-6.625 c -0.538,0.891 -0.644,21.367 -0.166,32 l 0.574,12.75 h 2.836 c 1.777,0 3.222,-0.72 3.868,-1.927 1.112,-2.077 0.663,-38.284 -0.513,-41.347 -0.416,-1.084 -1.737,-1.726 -3.555,-1.726 -1.591,0 -2.961,0.112 -3.044,0.25 M 774,685.5 V 708 h 3.393 c 2.303,0 3.614,-0.562 4.08,-1.75 1.156,-2.943 0.597,-40.461 -0.625,-41.933 C 780.247,663.593 778.46,663 776.878,663 H 774 v 22.5 M 453.609,672.716 c -0.414,1.769 -0.896,4.749 -1.07,6.623 -0.174,1.873 -0.624,5.64 -0.999,8.371 l -0.683,4.965 3.072,-0.451 c 1.689,-0.248 3.041,-0.737 3.005,-1.087 -1.651,-15.857 -2.641,-21.343 -3.325,-18.421 M 583,829 v 13 h 17 17 v -13 -13 h -17 -17 v 13"
            fillRule="evenodd"
            id="path1"
          />
        </g>
        <g id="eyes" className="fill-brand-200 animate-blink origin-[50%_40%]">
          <rect width="25" height="25" x="330" y="300" rx="10" ry="10" />
          <rect width="25" height="25" x="430" y="300" rx="10" ry="10" />
        </g>
        <g id="mouth" className="stroke-brand-200">
          <path
            fill="none"
            strokeWidth="12"
            strokeDasharray="none"
            d="m 340,374 c 0,0 16,35 53,34 39,0 52,-33 52,-33"
          />
        </g>
      </svg>
    </div>
  );
};

export default PpdLogo;