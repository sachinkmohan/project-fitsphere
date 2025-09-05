## Hero Visual Enhancement - Large Yoga Pose

### Updated

- Made stick figure significantly larger with increased viewBox (300x400) and stroke width
- Changed pose from basic standing to Tree Pose (Vrksasana) - a classic yoga position
- Unified all pose detection points to use the same blue color (#3B82F6) for consistency
- Increased size of detection points and their animation ranges for better visibility
- Updated connecting lines to match the blue color scheme

### Technical Details

- Tree pose includes: arms raised overhead, one leg standing, other leg bent resting on standing leg
- Added proper joint detection points for yoga pose including elbows, wrists, knees, and ankles
- Maintained staggered animation delays for visual appeal
- Preserved responsive design with proper viewBox scaling

### Previous Changes

- Replaced the animated icon and gradient in the Hero Visual section of `Hero.tsx` with a visually appealing image placeholder (SVG in a rounded, shadowed container).
- Kept the floating feature pills ("AI Powered", "Real-time", "Social") for visual interest.
- Added a comment to indicate where to replace the placeholder with a real image in the future.
- Removed the unused `Activity` import to resolve lint errors.
