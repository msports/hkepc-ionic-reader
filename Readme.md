# Dependencies

		// Clone Repo
		git clone https://github.com/gaplo917/hkepc-ionic-reader
		
		cd hkepc-ionic-reader
		
		npm install
		
		bower install
		
		// install ionic
		npm install ionic -g
		
		// install cordova
		npm install cordova -g

		// Use node modules
		npm install browserify -g
		
		// Build modules
		npm install gulp -g


# Run
		// init ionic
		ionic state reset

		// build the .js .scss files
		sh build.sh  
		
		// run in web
		ionic serve
		
		// run in ios
		sh build-ios.sh
        