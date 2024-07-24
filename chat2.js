function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() === "") {
        return;
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot-message';
    botMessage.textContent = getBotResponse(userInput.value);
    chatBox.appendChild(botMessage);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}



function getBotResponse(input) {
    const query = input.toLowerCase();
    if (query.includes('hello')) {
        return "Hello! How can I assist you with your travel plans today?";
    } else if (query.includes('book')) {
        return "Sure, I can help you with booking your trip. Where would you like to go?";
    } else if (query.includes('what is travel with ai')) {
        return "Travel with AI leverages advanced AI technology to provide personalized travel recommendations, smart itineraries, and real-time travel assistance. Our mission is to make your travel planning seamless and your journeys unforgettable.";
    } else if (query.includes('personalized recommendations')) {
        return "Tell me about your travel preferences, such as destinations, activities, and accommodation types, and I'll suggest options that match your interests. Whether you love beaches, mountains, cityscapes, or cultural experiences, I've got you covered. I can help you discover hidden gems, popular hotspots, and everything in between.";
    } else if (query.includes('smart itineraries')) {
        return "I can create a detailed travel plan for you, including transportation, accommodation, and activity suggestions. Just provide your travel dates and preferences. Your smart itinerary will include optimized routes, estimated travel times, and recommendations for must-see attractions and local eateries.";
    } else if (query.includes('real-time assistance')) {
        return "Need real-time updates on your travel plans? I can provide information on flight statuses, weather conditions, local tips, and emergency contacts. I'm here to answer any questions you might have during your trip, from finding the best restaurants to navigating public transportation.";
    } else if (query.includes('enhanced safety')) {
        return "Stay informed with real-time updates on travel advisories, weather conditions, and health and safety guidelines. I can provide tips to ensure a safe and enjoyable journey. Get updates on local health guidelines, COVID-19 restrictions, and other important safety information relevant to your destination.";
    } else if (query.includes('get personalized travel recommendations')) {
        return "Tell me about your interests, preferred travel style, and any specific destinations you're considering. I'll generate tailored recommendations for you. You can also specify your budget, travel dates, and accommodation preferences to receive more precise suggestions.";
    } else if (query.includes('create an itinerary')) {
        return "Absolutely! Provide me with your travel dates, preferred destinations, and any activities you want to include. I'll create a comprehensive itinerary for you, including daily plans, estimated travel times, and suggestions for local attractions and dining options.";
    } else if (query.includes('switch between light and dark modes')) {
        return "You can switch between light and dark modes by clicking the 'Toggle Theme' button located in the navigation bar. Your preference will be saved for future visits.";
    } else if (query.includes('packing tips')) {
        return "Pack light and bring versatile clothing suitable for different weather conditions. Remember essentials like travel documents, medications, and chargers. Consider using packing cubes to organize your belongings and maximize luggage space.";
    } else if (query.includes('safety tips')) {
        return "Always be aware of your surroundings, keep your valuables secure, and follow local guidelines and advisories. Stay in well-lit and populated areas. Make copies of important documents such as your passport and travel insurance, and keep them in a separate location from the originals.";
    } else if (query.includes('health tips for travelers')) {
        return "Stay hydrated, eat well, and get enough rest. If you're traveling to a different climate, be prepared for the weather conditions. Carry a basic first aid kit, and be aware of any necessary vaccinations or health precautions for your destination.";
    } else if (query.includes('issues with the website')) {
        return "If you're experiencing issues with the website, try refreshing the page or clearing your browser cache. For mobile users, ensure you have the latest version of the browser or app. Sometimes, updating can resolve common issues. If the problem persists, please contact our support team.";
    } else if (query.includes('account issues')) {
        return "For issues related to your account, such as login problems or password resets, please visit the 'Login' section and follow the instructions or contact our support team for further assistance. If you forgot your password, use the 'Forgot Password' link to reset it. Check your email for a reset link and follow the instructions.";
    } else if (query.includes('contact customer support')) {
        return "You can reach our customer support team via email at support@travelwithai.com or call us at +1-800-123-4567. We're here to help 24/7. For urgent matters, please use our live chat feature for immediate assistance.";
    } else if (query.includes('provide feedback')) {
        return "We value your feedback! Please share your thoughts and suggestions with us at feedback@travelwithai.com. Your input helps us improve our services. Participate in our user surveys and let us know how we can enhance your travel planning experience.";
    } else if (query.includes('find blog')) {
        return "Check out our blog for the latest travel tips, destination guides, and AI travel trends. Stay informed and get inspired for your next adventure. Subscribe to our newsletter to receive updates on new blog posts, travel deals, and exclusive offers.";
    } else if (query.includes('join community')) {
        return "Join our community of travel enthusiasts to share your experiences, get inspired, and connect with fellow travelers. Participate in forums, discussions, and events. Follow us on social media for travel inspiration, tips, and updates. Share your travel stories with us using #TravelWithAI.";
    } else if (query.includes('must-visit attractions in paris')) {
        return "Some must-visit attractions in Paris include the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Montmartre, and the Champs-Élysées. Don't miss the Seine River cruise and a visit to the Musée d'Orsay.";
    } else if (query.includes('local dining options')) {
        return "I can provide recommendations for local dining options based on your preferences. Just tell me what type of cuisine you’re interested in, and I can suggest popular restaurants or hidden gems in the area.";
    } else if (query.includes('traveling with children')) {
        return "When traveling with children, make sure to plan child-friendly activities, bring along essential items like snacks, toys, and medications, and check if accommodations offer family-friendly amenities. Ensure you have appropriate travel insurance and keep a close eye on your children's safety.";
    } else if (query.includes('traveling on a budget')) {
        return "To travel on a budget, consider using public transportation instead of taxis, stay in budget accommodations or hostels, eat at local markets or street vendors, and look for free or low-cost attractions. Booking flights and accommodations in advance can also help you save money.";
    } else if (query.includes('stay connected while traveling abroad')) {
        return "You can stay connected by using a local SIM card, an international roaming plan from your home carrier, or portable Wi-Fi devices. Many countries also offer public Wi-Fi in cafes, restaurants, and other public places.";
    } else if (query.includes('emergency while traveling')) {
        return "In case of an emergency, contact local emergency services immediately. Have the contact details of your embassy or consulate handy, and notify your travel insurance provider. It’s also helpful to have a list of local emergency contacts and medical facilities.";
    } else if (query.includes('track flight status')) {
        return "You can track your flight status by visiting the airline’s website or using flight tracking apps. Enter your flight number or departure and arrival cities to get real-time updates on your flight’s status.";
    } else if (query.includes('health precautions before traveling')) {
        return "Before traveling, check if any vaccinations are required or recommended for your destination. Carry a basic health kit, including medications for common ailments. Make sure to have any necessary prescription medications and keep them in their original packaging.";
    } else if (query.includes('adjust itinerary')) {
        return "Yes, you can adjust your itinerary as needed. If you want to make changes, simply provide me with the updated details, and I’ll revise your itinerary accordingly to fit your new plans.";
    } else if (query.includes('report problem with booking')) {
        return "To report a problem with your booking or reservation, contact the service provider directly (hotel, airline, etc.) or visit their customer service desk. If you booked through a travel agency or platform, reach out to their support team for assistance.";
    } else if (query.includes('handle language barriers')) {
        return "To handle language barriers, use translation apps or phrasebooks to help communicate. Learning a few basic phrases in the local language can also be useful. Many locals appreciate the effort, even if you’re not fluent.";
    } else if (query.includes('travel advisories and restrictions')) {
        return "Travel advisories and restrictions can vary by destination and may include information on safety, health, or entry requirements. I can provide you with the latest travel advisories and restrictions for your specific destination.";
    } else if (query.includes('ensure safety on public transportation')) {
        return "To ensure your safety while using public transportation, stay alert and keep your belongings secure. Avoid traveling alone at night and use well-known and reputable transportation services. Familiarize yourself with the local public transportation system and routes.";
    } else if (query.includes('lose passport or important documents')) {
        return "If you lose your passport or important documents, report it to the local police and contact your embassy or consulate immediately. They can assist with getting a replacement passport or other necessary documents. Keep copies of your important documents in a separate location.";
    } else if (query.includes('use chatbot')) {
        return "To use the 'Travel with AI' chatbot, simply type your question or request into the chat window. The chatbot will analyze your input and provide relevant information, recommendations, or assistance based on your query.";
    } else if (query.includes('use on mobile devices')) {
        return "Yes, 'Travel with AI' is designed to be mobile-friendly. You can access it through your mobile browser or app, and it will work seamlessly on smartphones and tablets.";
    } else if (query.includes('personal information safety')) {
        return "Yes, your privacy and security are important to us. We use advanced encryption and security protocols to protect your personal information. For more details, please review our Privacy Policy.";
    } else if (query.includes('update profile information')) {
        return "To update your profile information, log in to your account and go to the 'Account Settings' section. From there, you can edit your personal details, preferences, and contact information.";
    } else if (query.includes('forget account password')) {
        return "If you forget your account password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password using your registered email address.";
    } else if (query.includes('customize travel recommendations')) {
        return "Yes, you can customize your travel recommendations by providing detailed preferences such as budget, interests, travel dates, and specific destinations. This allows the AI to tailor recommendations to your individual needs.";
    } else if (query.includes('information update frequency')) {
        return "The information on 'Travel with AI' is updated regularly to ensure accuracy and relevance. This includes travel advisories, weather conditions, and other time-sensitive information.";
    } else if (query.includes('fuck')) {
        return "Ehtarem nafsek tekbes";
    }else if (query.includes('bhim')) {
        return "AA AA enti bhim";
    } else if (query.includes('ekbes rohek')) {
        return "OOO Mouch AAJBEK ????";
    }else if (query.includes('mouch aajebni')) {
        return "TA TAAMEL AAMLA";
    }
     else {
        return "I'm sorry, I didn't understand that. Can you please rephrase your question or ask about something specific related to travel?";
    }
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}