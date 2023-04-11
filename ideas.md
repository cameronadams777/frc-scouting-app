# Goals/Ideas

## Goals

[ ] - Use Tauri for Mobile deployment
[ ] - Successfully use Solid

## Ideas

[ ] - User can create a custom form
[ ] - Allow for specific form elements (selectable)
[ ] - Collect photos from camera
[ ] - Figure out compressing images?
[ ] - Bluetooth for sharing with hub
[ ] - Hub/Client System

## Custom Form

Builds out json file to be shared and interpreted by the app

```json
{
  formId: "{random-uuid}",
  formName: "Floor Scouting 2023 (DC District 1)",
  fields: [
    {
      name: "Can score upper",
      type: "checkbox"
      required: false,
    },
    {
      name: "Team Number",
      type: "number_input",
      required: true
    }
  ],
}
```
