domain := "/var/www/travels.alexishenry.eu"
server := "neon"

.PHONY: deploy
deploy:
	ssh -A $(server) 'cd $(domain) && git pull origin master && make install'

.PHONY: install
install:
	npm run build