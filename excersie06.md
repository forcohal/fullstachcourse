sequenceDiagram
    participant browser
    participant server
    participant adminBrowser as Admin Panel

    %% User note-saving flow
    Note right of browser: User writes a note and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves the new note
    server-->>browser: 201 Created (JSON response)
    deactivate server
    Note right of browser: Browser updates UI using JavaScript
    Note right of browser: No page reload happens

    %% Admin Hello World flow
    Note right of adminBrowser: Admin clicks "Say Hello"
    adminBrowser->>server: POST /admin/hello
    activate server
    Note right of server: Server receives request and responds with "Hello World"
    server-->>adminBrowser: 200 OK (JSON: { "message": "Hello World" })
    deactivate server
    Note right of adminBrowser: Admin panel displays "Hello World" dynamically
