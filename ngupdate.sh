#!/bin/bash

for version in {7..17}; do
  echo "Updating to Angular CLI/Core version $version"
  ng update --force  @angular/cli@$version @angular/core@$version
  npm i
  # Add any additional commands or actions you want to perform after each update

  sleep 1  # Optional: Add a delay between updates if needed
done

