FROM ruby:3.0.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /api
COPY . .
RUN bundle install

EXPOSE 8083

# Configure the main process to run when running the image
CMD ["rails", "server", "-p", "8083"]