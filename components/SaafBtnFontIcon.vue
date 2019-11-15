<template>
    <div>

     <Modal
        scrollable
        v-model="model"
        title="字体图标选择"
        @on-ok="ok"
        @on-cancel="cancel">
        <div class="modal-body f14">
					<ul class="font-icon-list" ref="icon">
						<li @click="geticon($event)"><span ><i class="fa fa-address-book" ></i> address-book</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-address-book-o" ></i> address-book-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-address-card" ></i> address-card</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-address-card-o" ></i> address-card-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-adjust" ></i> adjust</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-american-sign-language-interpreting" ></i> american-sign-language-interpreting</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-anchor" ></i> anchor</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-archive" ></i> archive</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-area-chart" ></i> area-chart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-arrows" ></i> arrows</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-arrows-h" ></i> arrows-h</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-arrows-v" ></i> arrows-v</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-asl-interpreting" ></i> asl-interpreting </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-assistive-listening-systems" ></i> assistive-listening-systems</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-asterisk" ></i> asterisk</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-at" ></i> at</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-audio-description" ></i> audio-description</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-automobile" ></i> automobile </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-balance-scale" ></i> balance-scale</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-ban" ></i> ban</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bank" ></i> bank </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bar-chart" ></i> bar-chart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bar-chart-o" ></i> bar-chart-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-barcode" ></i> barcode</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bars" ></i> bars</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bath" ></i> bath</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bathtub" ></i> bathtub </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery" ></i> battery </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-0" ></i> battery-0 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-1" ></i> battery-1 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-2" ></i> battery-2 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-3" ></i> battery-3 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-4" ></i> battery-4 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-empty" ></i> battery-empty</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-full" ></i> battery-full</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-half" ></i> battery-half</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-quarter" ></i> battery-quarter</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-battery-three-quarters" ></i> battery-three-quarters</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bed" ></i> bed</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-beer" ></i> beer</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bell" ></i> bell</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bell-o" ></i> bell-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bell-slash" ></i> bell-slash</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bell-slash-o" ></i> bell-slash-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bicycle" ></i> bicycle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-binoculars" ></i> binoculars</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-birthday-cake" ></i> birthday-cake</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-blind" ></i> blind</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bluetooth" ></i> bluetooth</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bluetooth-b" ></i> bluetooth-b</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bolt" ></i> bolt</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bomb" ></i> bomb</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-book" ></i> book</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bookmark" ></i> bookmark</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bookmark-o" ></i> bookmark-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-braille" ></i> braille</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-briefcase" ></i> briefcase</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bug" ></i> bug</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-building" ></i> building</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-building-o" ></i> building-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bullhorn" ></i> bullhorn</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bullseye" ></i> bullseye</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-bus" ></i> bus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cab" ></i> cab </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calculator" ></i> calculator</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar" ></i> calendar</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar-check-o" ></i> calendar-check-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar-minus-o" ></i> calendar-minus-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar-o" ></i> calendar-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar-plus-o" ></i> calendar-plus-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-calendar-times-o" ></i> calendar-times-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-camera" ></i> camera</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-camera-retro" ></i> camera-retro</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-car" ></i> car</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-caret-square-o-down" ></i> caret-square-o-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-caret-square-o-left" ></i> caret-square-o-left</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-caret-square-o-right" ></i> caret-square-o-right</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-caret-square-o-up" ></i> caret-square-o-up</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cart-arrow-down" ></i> cart-arrow-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cart-plus" ></i> cart-plus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cc" ></i> cc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-certificate" ></i> certificate</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-check" ></i> check</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-check-circle" ></i> check-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-check-circle-o" ></i> check-circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-check-square" ></i> check-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-check-square-o" ></i> check-square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-child" ></i> child</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-circle" ></i> circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-circle-o" ></i> circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-circle-o-notch" ></i> circle-o-notch</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-circle-thin" ></i> circle-thin</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-clock-o" ></i> clock-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-clone" ></i> clone</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-close" ></i> close </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cloud" ></i> cloud</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cloud-download" ></i> cloud-download</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cloud-upload" ></i> cloud-upload</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-code" ></i> code</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-code-fork" ></i> code-fork</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-coffee" ></i> coffee</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cog" ></i> cog</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cogs" ></i> cogs</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-comment" ></i> comment</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-comment-o" ></i> comment-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-commenting" ></i> commenting</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-commenting-o" ></i> commenting-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-comments" ></i> comments</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-comments-o" ></i> comments-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-compasrt" ></i> compass</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-copyright" ></i> copyright</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-creative-commons" ></i> creative-commons</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-credit-card" ></i> credit-card</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-credit-card-alt" ></i> credit-card-alt</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-crop" ></i> crop</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-crosshairs" ></i> crosshairs</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cube" ></i> cube</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cubes" ></i> cubes</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-cutlery" ></i> cutlery</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-dashboard" ></i> dashboard </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-database" ></i> database</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-deaf" ></i> deaf</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-deafness" ></i> deafness </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-desktop" ></i> desktop</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-diamond" ></i> diamond</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-dot-circle-o" ></i> dot-circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-download" ></i> download</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-drivers-license" ></i> drivers-license </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-drivers-license-o" ></i> drivers-license-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-edit" ></i> edit </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-ellipsis-h" ></i> ellipsis-h</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-ellipsis-v" ></i> ellipsis-v</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-envelope" ></i> envelope</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-envelope-o" ></i> envelope-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-envelope-open" ></i> envelope-open</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-envelope-open-o" ></i> envelope-open-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-envelope-square" ></i> envelope-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-eraser" ></i> eraser</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-exchange" ></i> exchange</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-exclamation" ></i> exclamation</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-exclamation-circle" ></i> exclamation-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-exclamation-triangle" ></i> exclamation-triangle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-external-link" ></i> external-link</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-external-link-square" ></i> external-link-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-eye" ></i> eye</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-eye-slash" ></i> eye-slash</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-eyedropper" ></i> eyedropper</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-fax" ></i> fax</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-feed" ></i> feed </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-female" ></i> female</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-fighter-jet" ></i> fighter-jet</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-archive-o" ></i> file-archive-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-audio-o" ></i> file-audio-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-code-o" ></i> file-code-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-excel-o" ></i> file-excel-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-image-o" ></i> file-image-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-movie-o" ></i> file-movie-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-pdf-o" ></i> file-pdf-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-photo-o" ></i> file-photo-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-picture-o" ></i> file-picture-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-powerpoint-o" ></i> file-powerpoint-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-sound-o" ></i> file-sound-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-video-o" ></i> file-video-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-word-o" ></i> file-word-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-file-zip-o" ></i> file-zip-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-film" ></i> film</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-filter" ></i> filter</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-fire" ></i> fire</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-fire-extinguisher" ></i> fire-extinguisher</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-flag" ></i> flag</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-flag-checkered" ></i> flag-checkered</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-flag-o" ></i> flag-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-flash" ></i> flash </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-flask" ></i> flask</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-folder" ></i> folder</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-folder-o" ></i> folder-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-folder-open" ></i> folder-open</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-folder-open-o" ></i> folder-open-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-frown-o" ></i> frown-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-futbol-o" ></i> futbol-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-gamepad" ></i> gamepad</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-gavel" ></i> gavel</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-gear" ></i> gear </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-gears" ></i> gears </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-gift" ></i> gift</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-glass" ></i> glass</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-globe" ></i> globe</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-graduation-cap" ></i> graduation-cap</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-group" ></i> group </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-grab-o" ></i> hand-grab-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-lizard-o" ></i> hand-lizard-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-paper-o" ></i> hand-paper-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-peace-o" ></i> hand-peace-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-pointer-o" ></i> hand-pointer-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-rock-o" ></i> hand-rock-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-scissors-o" ></i> hand-scissors-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-spock-o" ></i> hand-spock-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hand-stop-o" ></i> hand-stop-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-handshake-o" ></i> handshake-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hard-of-hearing" ></i> hard-of-hearing </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hashtag" ></i> hashtag</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hdd-o" ></i> hdd-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-headphones" ></i> headphones</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-heart" ></i> heart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-heart-o" ></i> heart-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-heartbeat" ></i> heartbeat</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-history" ></i> history</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-home" ></i> home</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hotel" ></i> hotel </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass" ></i> hourglass</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-1" ></i> hourglass-1 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-2" ></i> hourglass-2 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-3" ></i> hourglass-3 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-end" ></i> hourglass-end</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-half" ></i> hourglass-half</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-o" ></i> hourglass-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-hourglass-start" ></i> hourglass-start</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-i-cursor" ></i> i-cursor</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-id-badge" ></i> id-badge</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-id-card" ></i> id-card</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-id-card-o" ></i> id-card-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-image" ></i> image </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-inbox" ></i> inbox</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-industry" ></i> industry</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-info" ></i> info</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-info-circle" ></i> info-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-institution" ></i> institution </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-key" ></i> key</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-keyboard-o" ></i> keyboard-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-language" ></i> language</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-laptop" ></i> laptop</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-leaf" ></i> leaf</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-legal" ></i> legal </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-lemon-o" ></i> lemon-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-level-down" ></i> level-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-level-up" ></i> level-up</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-life-bouy" ></i> life-bouy </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-life-buoy" ></i> life-buoy </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-life-ring" ></i> life-ring</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-life-saver" ></i> life-saver </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-lightbulb-o" ></i> lightbulb-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-line-chart" ></i> line-chart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-location-arrow" ></i> location-arrow</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-lock" ></i> lock</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-low-vision" ></i> low-vision</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-magic" ></i> magic</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-magnet" ></i> magnet</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mail-forward" ></i> mail-forward </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mail-reply" ></i> mail-reply </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mail-reply-all" ></i> mail-reply-all </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-male" ></i> male</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-map" ></i> map</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-map-marker" ></i> map-marker</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-map-o" ></i> map-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-map-pin" ></i> map-pin</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-map-signs" ></i> map-signs</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-meh-o" ></i> meh-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-microchip" ></i> microchip</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-microphone" ></i> microphone</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-microphone-slash" ></i> microphone-slash</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-minus" ></i> minus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-minus-circle" ></i> minus-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-minus-square" ></i> minus-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-minus-square-o" ></i> minus-square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mobile" ></i> mobile</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mobile-phone" ></i> mobile-phone </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-money" ></i> money</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-moon-o" ></i> moon-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mortar-board" ></i> mortar-board </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-motorcycle" ></i> motorcycle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-mouse-pointer" ></i> mouse-pointer</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-music" ></i> music</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-navicon" ></i> navicon </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-newspaper-o" ></i> newspaper-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-object-group" ></i> object-group</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-object-ungroup" ></i> object-ungroup</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-paint-brush" ></i> paint-brush</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-paper-plane" ></i> paper-plane</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-paper-plane-o" ></i> paper-plane-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-paw" ></i> paw</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-pencil" ></i> pencil</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-pencil-square" ></i> pencil-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-pencil-square-o" ></i> pencil-square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-percent" ></i> percent</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-phone" ></i> phone</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-phone-square" ></i> phone-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-photo" ></i> photo </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-picture-o" ></i> picture-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-pie-chart" ></i> pie-chart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plane" ></i> plane</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plug" ></i> plug</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plus" ></i> plus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plus-circle" ></i> plus-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plus-square" ></i> plus-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-plus-square-o" ></i> plus-square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-podcast" ></i> podcast</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-power-off" ></i> power-off</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-print" ></i> print</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-puzzle-piece" ></i> puzzle-piece</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-qrcode" ></i> qrcode</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-question" ></i> question</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-question-circle" ></i> question-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-question-circle-o" ></i> question-circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-quote-left" ></i> quote-left</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-quote-right" ></i> quote-right</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-random" ></i> random</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-recycle" ></i> recycle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-refresh" ></i> refresh</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-registered" ></i> registered</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-remove" ></i> remove </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-reorder" ></i> reorder </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-reply" ></i> reply</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-reply-all" ></i> reply-all</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-retweet" ></i> retweet</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-road" ></i> road</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-rocket" ></i> rocket</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-rss" ></i> rss</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-rss-square" ></i> rss-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-s15" ></i> s15 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-search" ></i> search</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-search-minus" ></i> search-minus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-search-plus" ></i> search-plus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-send" ></i> send </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-send-o" ></i> send-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-server" ></i> server</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-share" ></i> share</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-share-alt" ></i> share-alt</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-share-alt-square" ></i> share-alt-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-share-square" ></i> share-square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-share-square-o" ></i> share-square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-shield" ></i> shield</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-ship" ></i> ship</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-shopping-bag" ></i> shopping-bag</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-shopping-basket" ></i> shopping-basket</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-shopping-cart" ></i> shopping-cart</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-shower" ></i> shower</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sign-in" ></i> sign-in</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sign-language" ></i> sign-language</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sign-out" ></i> sign-out</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-signal" ></i> signal</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-signing" ></i> signing </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sitemap" ></i> sitemap</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sliders" ></i> sliders</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-smile-o" ></i> smile-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-snowflake-o" ></i> snowflake-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-soccer-ball-o" ></i> soccer-ball-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort" ></i> sort</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-alpha-asc" ></i> sort-alpha-asc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-alpha-desc" ></i> sort-alpha-desc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-amount-asc" ></i> sort-amount-asc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-amount-desc" ></i> sort-amount-desc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-asc" ></i> sort-asc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-desc" ></i> sort-desc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-down" ></i> sort-down </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-numeric-asc" ></i> sort-numeric-asc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-numeric-desc" ></i> sort-numeric-desc</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sort-up" ></i> sort-up </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-space-shuttle" ></i> space-shuttle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-spinner" ></i> spinner</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-spoon" ></i> spoon</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-square" ></i> square</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-square-o" ></i> square-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star" ></i> star</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star-half" ></i> star-half</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star-half-empty" ></i> star-half-empty </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star-half-full" ></i> star-half-full </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star-half-o" ></i> star-half-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-star-o" ></i> star-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sticky-note" ></i> sticky-note</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sticky-note-o" ></i> sticky-note-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-street-view" ></i> street-view</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-suitcase" ></i> suitcase</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-sun-o" ></i> sun-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-support" ></i> support </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tablet" ></i> tablet</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tachometer" ></i> tachometer</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tag" ></i> tag</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tags" ></i> tags</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tasks" ></i> tasks</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-taxi" ></i> taxi</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-television" ></i> television</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-terminal" ></i> terminal</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer" ></i> thermometer </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-0" ></i> thermometer-0 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-1" ></i> thermometer-1 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-2" ></i> thermometer-2 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-3" ></i> thermometer-3 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-4" ></i> thermometer-4 </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-empty" ></i> thermometer-empty</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-full" ></i> thermometer-full</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-half" ></i> thermometer-half</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-quarter" ></i> thermometer-quarter</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thermometer-three-quarters" ></i> thermometer-three-quarters</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thumb-tack" ></i> thumb-tack</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thumbs-down" ></i> thumbs-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thumbs-o-down" ></i> thumbs-o-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thumbs-o-up" ></i> thumbs-o-up</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-thumbs-up" ></i> thumbs-up</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-ticket" ></i> ticket</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-times" ></i> times</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-times-circle" ></i> times-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-times-circle-o" ></i> times-circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-times-rectangle" ></i> times-rectangle </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-times-rectangle-o" ></i> times-rectangle-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tint" ></i> tint</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-down" ></i> toggle-down </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-left" ></i> toggle-left </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-off" ></i> toggle-off</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-on" ></i> toggle-on</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-right" ></i> toggle-right </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-toggle-up" ></i> toggle-up </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-trademark" ></i> trademark</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-trash" ></i> trash</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-trash-o" ></i> trash-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tree" ></i> tree</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-trophy" ></i> trophy</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-truck" ></i> truck</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tty" ></i> tty</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-tv" ></i> tv </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-umbrella" ></i> umbrella</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-universal-access" ></i> universal-access</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-university" ></i> university</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-unlock" ></i> unlock</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-unlock-alt" ></i> unlock-alt</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-unsorted" ></i> unsorted </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-upload" ></i> upload</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user" ></i> user</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-circle" ></i> user-circle</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-circle-o" ></i> user-circle-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-o" ></i> user-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-plus" ></i> user-plus</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-secret" ></i> user-secret</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-user-times" ></i> user-times</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-users" ></i> users</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-vcard" ></i> vcard </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-vcard-o" ></i> vcard-o </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-video-camera" ></i> video-camera</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-volume-control-phone" ></i> volume-control-phone</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-volume-down" ></i> volume-down</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-volume-off" ></i> volume-off</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-volume-up" ></i> volume-up</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-warning" ></i> warning </span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-wheelchair" ></i> wheelchair</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-wheelchair-alt" ></i> wheelchair-alt</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-wifi" ></i> wifi</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-window-close" ></i> window-close</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-window-close-o" ></i> window-close-o</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-window-maximize" ></i> window-maximize</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-window-minimize" ></i> window-minimize</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-window-restore" ></i> window-restore</span></li>
						<li @click="geticon($event)"><span ><i class="fa fa-wrench" ></i> wrench</span></li>
					</ul>
				</div>
    </Modal>
    </div>
</template>
<script>

export default {
    data(){
        return{
			model:false,
            iconclass:null,

        }
    },
    mounted(){

    },
    methods: {
        // 选中字体图标
            geticon(event,index){
                this.iconclass=event.path[0].firstChild.className;
                for(let i=0;i<this.$refs.icon.children.length;i++){
                    this.$refs.icon.children[i].children[0].style.color='#333'
                }
                event.target.style.color='#ff9900'
            },
            ok () {
				this.$emit('selecticon', this.iconclass)
			},
			open(){
				this.model=true;
			},
            cancel () {
                
            }
        }
    
}
</script>
<style lang="less" scoped>
.modal-body{
  position: relative;
  padding: 15px;
}
.f14 {
  font-size: 14px;
}
.font-icon-list {
  padding: 0;
  list-style: none;
  position: relative;
  max-height: 330px;
  overflow: hidden;
  overflow-y: auto;
  margin-left: 1.5%;
}
.font-icon-list li {
  display: block;
  float: left;
  width: 33%;
  margin: 4px  0;
  position: relative;
  transition: all 0.2s;
}
.font-icon-list li:hover,
.font-icon-list li.active {
  transform: scale(1.2, 1.2) translate(15px, 0px);
  cursor:pointer
}
.font-icon-list li.active span {
  color: #ff9900;
}
.font-icon-list li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  padding: 0 5px;
  display: block;
  color: #333;
  line-height: 26px;
}
.hh{
    color: #ff9900 !important;
}

</style>

