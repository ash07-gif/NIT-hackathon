# **App Name**: CityPulse

## Core Features:

- User Authentication: Allow residents and admins to securely sign in using Firebase authentication. Resident authentication via Aadhar or Election Card number, admin via email/password provided by their organization.
- Issue Reporting: Enable residents to report issues by providing a title, description, category (Road, Water, Lighting, Sanitation, Others), and attaching photos. Capture location using GPS or manual pin placement. Confirmation toast on successful submission.
- Interactive Map View: Display reported issues on an interactive map, using color-coded markers to indicate status (Red: Open, Orange: In Progress, Green: Resolved). Enable filtering by category and status. Uses current location of user if allowed. Generates map summary by category to show hotspots (e.g. areas with lots of lighting requests)
- Issue Detail & Action: Display full information on the Issue Detail page, including title, category, status, images, description, location map snippet, timeline, and comments. Residents can support (upvote) and share. Admins can update the status, assign to a team, add resolution notes, and upload resolution photos, tool to suggest resolution based on prior history.
- Community Engagement Feed: Display a feed of trending issues in the city, sorted by upvotes/comments. Each card shows the issue title, ward, thumbnail, support count, and status. Provide inline support and comment buttons. Filters for Trending, Nearby, and Recently Resolved.
- Admin Dashboard: Provide admins with a dashboard to manage reported issues, assign categories, update statuses, and view analytics. Includes an overview of total, resolved, and pending issues, and average resolution time. Admins are automatically granted privileges when the create their account and the app detects the official admin domain on their email.
- Firebase Integration: Use Firebase for database, authentication, and storage (images). Structure data to efficiently support reporting, map views, and admin operations.

## Style Guidelines:

- Primary color: Dark blue (#3F51B5) to convey trust and authority. This hue suggests civic responsibility, aligning with the app's function in municipal governance.
- Background color: Very light blue (#E8EAF6), offering a subtle, professional backdrop that complements the dark blue primary color without causing harsh contrast.
- Accent color: Soft orange (#FFAB40), selected as it's approximately 30 degrees to the 'left' of the primary blue. It adds contrast to improve affordance in buttons and actionable elements, helping them to stand out from the dark mode background. Use it for floating action buttons and status tags.
- Body and headline font: 'PT Sans' for a modern, readable style that works well for both headlines and body text, providing a balanced appearance suitable for a broad user base.
- Use consistent, simple icons from a library like Material Icons or FontAwesome. Ensure icons are clear, recognizable, and match the app's modern style.
- Implement subtle, meaningful animations using a library such as react-native-animatable to improve the user experience, e.g. animated transitions between pages or when an item's status is updated. Animations should serve a purpose and enhance understanding.