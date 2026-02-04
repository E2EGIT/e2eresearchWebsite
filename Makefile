build-app-e2e-website-mails:
	docker build . -t e2e-website-mails-image -f Dockerfile.production

run-app-e2e-website-mails:
	docker-compose -f docker-compose-e2e-website-mails.yml up -d

stop-app-e2e-website-mails:
	docker-compose -f docker-compose-e2e-website-mails.yml down
