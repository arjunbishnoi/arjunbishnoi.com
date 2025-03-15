<template>
  <div>
    <!-- Hero Section with fixed height container and centered content -->
    <section class="relative overflow-hidden bg-black hero-section flex flex-col items-center justify-between h-screen">
      <!-- Top area with title and paragraph - keeping original positioning -->
      <div class="mx-auto max-w-7xl px-4 pt-16 pb-2 sm:pb-4 lg:px-8 w-full">
        <div class="text-center hero-content w-full flex items-center justify-center flex-col">
          <div class="inline-block hero-title-wrapper w-full">
            <h1 class="font-bold tracking-tight text-white text-center max-w-full leading-none w-full">
              <!-- Mobile-first hero title with controlled line breaks and smooth size scaling -->
              <span class="hero-title-container inline-block text-center w-full">
                <span class="hero-title-line hero-line-1 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="font-size: 30px !important; line-height: 1.0;">Web &amp; Mobile</span>
                <span class="hero-title-line hero-line-2 block mx-auto text-8xl md:text-6xl lg:text-7xl tracking-tight" style="font-size: 30px !important; line-height: 1.0;">Designer / Developer</span>
              </span>
            </h1>
            <p class="mt-5 sm:mt-8 text-lg leading-7 xs:leading-8 text-gray-300 mx-auto w-[90%] sm:w-auto sm:max-w-2xl hero-text font-medium">
              Crafting elegant web solutions with precision.
              Specialized in React, Vue.js, and 
              intuitive experiences that solve real problems.
            </p>
          </div>
        </div>
      </div>
          
      <!-- Technology Icons with scroll animation - FIXED in center of viewport -->
      <div class="fixed inset-x-0 h-[120px] flex items-center justify-center" style="top: calc(50vh - 60px); z-index: 20;">
        <div class="tech-scroll-container w-full">
          <div class="tech-scroll">
            <!-- Vue.js -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M19.197 1.608l.003.001h-4.425L12 6.4v.002l-2.772-4.793H4.803v.001h-.005v.001L12 18.833l7.202-12.424v-.001l.001-.001h-.006z" />
              </svg>
            </div>
            
            <!-- React -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="none" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-3.5c-2.486 0-4.5-2.014-4.5-4.5s2.014-4.5 4.5-4.5 4.5 2.014 4.5 4.5-2.014 4.5-4.5 4.5z" />
              </svg>
            </div>
            
            <!-- Tailwind CSS -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
            </div>
            
            <!-- JavaScript -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </svg>
            </div>
            
            <!-- Node.js -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M11.998 24c-.321 0-.641-.084-.923-.249l-2.937-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.325-.604.066-.037.151-.024.219.015l2.255 1.339c.82.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.927c0-.099-.053-.192-.134-.238l-8.791-5.072c-.081-.047-.187-.047-.269 0L2.859 6.689c-.083.047-.135.14-.135.238v10.148c0 .097.052.19.134.237l2.408 1.392c1.306.652 2.105-.116 2.105-.89V7.787c0-.142.114-.253.255-.253h1.114c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.304-1.325c-.57-.329-.923-.943-.923-1.604V6.926c0-.661.352-1.275.923-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.603v10.148c0 .661-.354 1.273-.924 1.603l-8.794 5.078c-.282.163-.602.247-.923.247zm3.326-12.233c-3.949 0-4.771-1.815-4.771-3.337 0-.142.114-.253.255-.253h1.136c.127 0 .232.092.253.212.172 1.168.683 1.756 3.127 1.756 1.926 0 2.746-.435 2.746-1.458 0-.589-.231-1.026-3.225-1.319-2.502-.246-4.048-.799-4.048-2.708 0-1.784 1.505-2.847 4.029-2.847 2.832 0 4.23.983 4.406 3.094.006.068-.019.134-.067.184a.25.25 0 01-.181.074h-1.139c-.118 0-.221-.083-.245-.198-.274-1.193-.94-1.575-2.774-1.575-2.041 0-2.279.712-2.279 1.243 0 .646.28.834 3.126 1.198 2.809.357 4.146.862 4.146 2.82 0 1.924-1.609 3.075-4.418 3.075z" />
              </svg>
            </div>

            <!-- TypeScript -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
            </div>
            
            <!-- Next.js -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M11.572 0c-.176 0-.31.001-.358.007-.218.037-.226.086-.226.175v7.108c0 .086.01.086.225.086h4.314c.155 0 .226-.01.226-.086v-7.108c0-.086-.01-.086-.226-.086zm-.792.616l.055-.013h4.987c.491 0 .755.211.755.599v21.46c0 .386-.252.626-.749.626-.357 0-.625-.145-1.109-.595l-13.843-16.32v15.58c0 .446-.051.706.144.865.195.195.562.195.979.195h1.204c.05 0 .074.015.074.058v2.89c0 .048-.021.07-.075.07H.075c-.054 0-.075-.019-.075-.069v-2.891c0-.041.024-.058.075-.058H1.28c.433 0 .79-.037.978-.194.19-.159.14-.449.14-.865v-17.19c0-.431.015-.754-.405-.959-.42-.205-.786-.187-1.238-.187H.074c-.051 0-.073-.015-.073-.058V1.972c0-.048.022-.073.074-.073h3.58c.493 0 .716.058.969.301.255.25.395.459.699.699.778L17.276 19.843V2.8c0-.446.05-.704-.144-.87-.193-.159-.557-.2-.978-.2h-1.21c-.04 0-.06-.015-.06-.059V.69c0-.049.016-.074.069-.074z" />
              </svg>
            </div>
            
            <!-- Firebase -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
              </svg>
            </div>
            
            <!-- Git -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.721.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </svg>
            </div>
            
            <!-- Figma -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </svg>
            </div>

            <!-- MongoDB -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
              </svg>
            </div>
            
            <!-- Docker -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 11">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
              </svg>
            </div>
            
            <!-- AWS -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.654.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.159-1.142.159z" />
                <path d="M21.101 16.992c-2.582 1.909-6.33 2.914-9.523 2.914-4.495 0-8.55-1.654-11.612-4.403-.24-.223-.024-.534.263-.359 3.291 1.914 7.375 3.068 11.599 3.068 2.84 0 5.973-.59 8.854-1.798.43-.184.79.287.419.578z" />
                <path d="M22.044 15.967c-.327-.422-2.179-.199-3.003-.103-.255.032-.295-.19-.063-.351 1.463-1.031 3.875-.735 4.155-.39.287.351-.08 2.793-1.47 3.953-.215.184-.422.088-.327-.151.327-.815 1.004-2.636.708-3.958z"/>
              </svg>
            </div>
            
            <!-- Python -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 13">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.09.71-.07.77-.04.84-.01 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.33-.41-.08-.41.08-.33.23zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.33-.41-.08-.41.08-.33.23z"/>
              </svg>
            </div>
            
            <!-- GraphQL -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 14">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M12.001 0a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286zm-8.571 5.357a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286zm17.143 0a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286zM3.429 13.643a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286zm17.143 0a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286zM12.001 19.714a2.143 2.143 0 100 4.286 2.143 2.143 0 000-4.286z" />
                <path d="M3.867 6.878l15.858 4.265-.52 1.938-15.858-4.264.52-1.939zm-.52 8.245l15.858-4.264.52 1.939-15.858 4.264-.52-1.939zM5.112 8.05l7.731-6.224 1.352 1.68-7.731 6.224-1.352-1.68zm13.776 7.9l-7.73 6.224-1.352-1.68 7.73-6.224 1.352 1.68z" />
                <path d="M5.112 15.95l1.352-1.68 7.731 6.224-1.352 1.68-7.731-6.224zm13.776-7.9l-1.352 1.68-7.73-6.224 1.352-1.68 7.73 6.224z" />
              </svg>
            </div>

            <!-- Vue.js (duplicate for continuous loop) -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 15">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M19.197 1.608l.003.001h-4.425L12 6.4v.002l-2.772-4.793H4.803v.001h-.005v.001L12 18.833l7.202-12.424v-.001l.001-.001h-.006z" />
              </svg>
            </div>
            
            <!-- React (duplicate for continuous loop) -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path d="M12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill="none" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-3.5c-2.486 0-4.5-2.014-4.5-4.5s2.014-4.5 4.5-4.5 4.5 2.014 4.5 4.5-2.014 4.5-4.5 4.5z" />
              </svg>
            </div>
            
            <!-- Tailwind CSS (duplicate for continuous loop) -->
            <div class="h-10 w-10 rounded-md bg-gray-800/80 border border-gray-700/50 flex items-center justify-center shadow-sm mx-4 hover:bg-gray-700/80 transition-colors" style="--i: 17">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-300">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom area with buttons and scroll arrow - with moderate bottom margin -->
      <div class="w-full flex flex-col items-center justify-center mb-16 sm:mb-20 mt-auto">
        <!-- Buttons -->
        <div class="flex items-center justify-center gap-x-6">
          <a
            href="/resume.pdf"
            class="resume-btn rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors"
            download
          >
            Download Resume
          </a>
          <a href="#contact" class="text-sm font-semibold leading-6 text-gray-300">
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </div>
        
        <!-- Scroll down indicator -->
        <div class="scroll-indicator mt-6 pb-4 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-gray-700 animate-bounce-subtle" :class="{'opacity-0': scrolledDown}">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </div>

      <!-- Background gradient effect -->
      <div class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative py-8 sm:py-10 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/projects" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Projects</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Projects content -->
      <div class="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project Card 1 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="E-Commerce Platform Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
              <p class="text-gray-400 mb-4">
                A full-featured e-commerce platform built with React, Node.js, and MongoDB. 
                Features include product search, filtering, cart management, user authentication, 
                and payment processing.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">React</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Stripe</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div class="bg-gray-900/50 rounded-lg overflow-hidden">
            <div class="h-48 bg-gray-800/50 relative overflow-hidden">
              <!-- Replace with abstract colorful image -->
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Task Management App Abstract Visualization" 
                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <!-- Add colorful overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tl from-secondary/40 to-primary/40 mix-blend-overlay"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2">Task Management App</h3>
              <p class="text-gray-400 mb-4">
                A productivity app that helps users organize tasks, set priorities, and track progress. 
                Built with Vue.js and Firebase, featuring real-time updates and collaborative features.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vue.js</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Firebase</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Tailwind CSS</span>
                <span class="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Vuex</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">View Demo</a>
                <a href="#" class="text-primary hover:text-primary/80 text-sm font-medium">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/skills" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Skills</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Skills content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Frontend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> React.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Vue.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Next.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Nuxt.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Tailwind CSS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> JavaScript/TypeScript
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Backend</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Node.js
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Express
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> MongoDB
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> PostgreSQL
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> REST API Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> GraphQL
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold text-primary mb-4">Design & Tools</h3>
            <ul class="space-y-2 text-gray-300">
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> UI/UX Design
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Figma
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Git & GitHub
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> Docker
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> AWS
              </li>
              <li class="flex items-center">
                <span class="mr-2 text-primary">▹</span> CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/experience" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Experience</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Experience content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="space-y-12">
          <!-- Experience Item 1 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Senior Frontend Developer</h3>
              <p class="text-primary font-medium mb-2">TechCorp Inc. • 2021 - Present</p>
              <p class="text-gray-400 mb-4">
                Led the development of the company's flagship SaaS product, implementing 
                modern frontend architecture and improving performance by 40%.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Architected and implemented a new component system using React and TypeScript</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Improved application performance and reduced load times by 40%</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Collaborated with design team to implement a new design system</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Experience Item 2 -->
          <div class="relative pl-8 border-l border-gray-800">
            <div class="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
            <div>
              <h3 class="text-xl font-semibold text-white">Full Stack Developer</h3>
              <p class="text-primary font-medium mb-2">Web Solutions Ltd. • 2018 - 2021</p>
              <p class="text-gray-400 mb-4">
                Developed and maintained multiple client projects, focusing on responsive design 
                and cross-browser compatibility.
              </p>
              <ul class="space-y-2 text-gray-300">
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Built RESTful APIs using Node.js and Express for various client projects</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Implemented responsive designs and ensured cross-browser compatibility</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2 text-primary mt-1">▹</span> 
                  <span>Integrated third-party services and APIs into client applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/about" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">About</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- About content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">Who I Am</h3>
            <p class="text-gray-300 mb-6">
              I'm a full stack developer and UI/UX designer with a passion for creating 
              elegant, responsive, and user-friendly applications. With expertise in modern 
              frontend and backend technologies, I build solutions that not only work flawlessly 
              but also provide exceptional user experiences.
            </p>
            <p class="text-gray-300">
              My approach combines technical excellence with creative problem-solving, 
              ensuring that the applications I build are not only functionally robust but 
              also visually appealing and intuitive to use.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-primary mb-4">My Journey</h3>
            <p class="text-gray-300 mb-6">
              My journey into web development began with a curiosity about how digital 
              experiences are built. Over the years, I've honed my skills across the full 
              stack, from crafting pixel-perfect UIs to architecting scalable backend systems.
            </p>
            <p class="text-gray-300">
              I'm constantly learning and adapting to new technologies and best practices, 
              ensuring that my work remains current and innovative in a rapidly evolving 
              digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-16 bg-black">
      <!-- Sticky header -->
      <div class="sticky z-30 bg-black/80 backdrop-blur-md py-2" style="top: calc(var(--navbar-height) - 1px);">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <NuxtLink to="/contact" class="flex justify-between items-center w-full group">
            <span class="text-2xl font-bold text-white group-hover:text-primary transition-colors">Contact</span>
            <span class="text-gray-400 group-hover:text-primary transition-colors">
              <span aria-hidden="true">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
      
      <!-- Contact content -->
      <div class="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div class="max-w-2xl mx-auto text-center mb-12">
          <h3 class="text-xl font-semibold text-white mb-4">Get In Touch</h3>
          <p class="text-gray-300">
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            a project in mind, or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div class="max-w-xl mx-auto">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                class="block w-full rounded-md border-0 bg-gray-900/50 text-white shadow-sm px-4 py-2.5 focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                class="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state for scroll indicator visibility
const scrolledDown = ref(false);

// Handle scroll events to show/hide the indicator
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  // Show indicator only when near top of page (e.g., less than 100px scrolled)
  scrolledDown.value = window.scrollY > 100;
}
</script> 

<style>
/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Define primary and secondary colors */
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
}

.text-primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.border-primary {
  border-color: var(--color-primary);
}

/* Adjust the sticky header positioning to account for navbar height */
.sticky.top-12 {
  top: var(--navbar-height);
}

/* Technology Icons scroll animation */
.tech-scroll-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 8px 0;
  display: flex;
  justify-content: center;
}

/* Add max-width constraints for larger screens */
@media (min-width: 768px) {
  .tech-scroll-container {
    max-width: 85%;
    margin: 0 auto;
  }
}

@media (min-width: 1280px) {
  .tech-scroll-container {
    max-width: 1024px;
    margin: 0 auto;
  }
}

/* Add futuristic edge effects with pseudo-elements */
.tech-scroll-container::before,
.tech-scroll-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 20%;
  z-index: 2;
  pointer-events: none;
}

.tech-scroll-container::before {
  left: 0;
  background: linear-gradient(to right, 
    rgba(0, 0, 0, 1), 
    rgba(0, 0, 0, 0.8) 10%, 
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  box-shadow: none;
}

.tech-scroll-container::after {
  right: 0;
  background: linear-gradient(to left, 
    rgba(0, 0, 0, 1), 
    rgba(0, 0, 0, 0.8) 10%, 
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  box-shadow: none;
}

/* Seamless scrolling animation */
.tech-scroll {
  display: flex;
  width: max-content;
  padding: 0;
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 2)); /* Move exactly half the total width */
  }
}

/* Optional: pause animation on hover */
.tech-scroll-container:hover .tech-scroll {
  animation-play-state: paused;
}

/* Futuristic glow effect for the tech icons */
.tech-scroll > div {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tech-scroll > div::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  transition: opacity 0.3s ease;
}

.tech-scroll > div:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.tech-scroll > div:hover::after {
  opacity: 1;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.1;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.02);
  }
}

/* Subtle bounce animation for scroll indicator */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

.animate-bounce-subtle {
  animation: bounce-subtle 2s ease-in-out infinite;
}

/* Scroll indicator styling */
.scroll-indicator {
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.4s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator svg {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scroll-indicator svg.opacity-0 {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* Hide scroll indicator on larger screens where it's less needed */
@media (min-width: 1280px) {
  .scroll-indicator {
    opacity: 0.4;
  }
}

/* Mobile-optimized hero text with balanced lines */
@media (max-width: 640px) {
  .hero-text {
    text-align-last: center;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
    line-height: 1.8;
  }
}

/* Ensure hero text stays at three lines consistently across all screen sizes */
@media (min-width: 768px) {
  .hero-text {
    max-width: none; /* Allow natural expansion */
    min-width: 42rem; /* Minimum width to ensure 2 lines on larger screens */
    white-space: normal;
    line-height: 1.7;
  }
}
</style> 