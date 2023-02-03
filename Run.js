# Script to disable Chrome extensions

# Import necessary libraries
import os
import sys
import json

# Check if the operating system is Windows
if sys.platform == 'win32':
    # Set the path to the Chrome user data folder
    chrome_user_data_folder = os.path.expanduser('~\\AppData\\Local\\Google\\Chrome\\User Data')
else:
    # Set the path to the Chrome user data folder
    chrome_user_data_folder = os.path.expanduser('~/.config/google-chrome')

# Set the path to the file containing the list of extensions
extension_list_file = os.path.join(chrome_user_data_folder, 'Default', 'Extensions', 'extensions.json')

# Load the list of extensions from the file
try:
    with open(extension_list_file, 'r') as f:
        extension_list = json.load(f)
except:
    # If the file is not found or can't be read, print an error message and exit
    print('Error: Unable to load extension list from file')
    sys.exit(1)

# Iterate over the list of extensions
for extension in extension_list:
    # Disable each extension by setting the "enabled" flag to false
    extension['enabled'] = False

# Save the updated list of extensions back to the file
try:
    with open(extension_list_file, 'w') as f:
        json.dump(extension_list, f)
except:
    # If the file can't be written, print an error message and exit
    print('Error: Unable to save updated extension list to file')
    sys.exit(1)

# Print a success message
print('Chrome extensions have been successfully disabled')
