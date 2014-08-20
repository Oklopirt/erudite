# encoding: utf-8

require 'sinatra'
require 'slim'

get '/' do
  slim :calculator
end