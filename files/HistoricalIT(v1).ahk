; Snell, Dallin
; 11 FEB 19
; to process csv files


#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

#Persistent ; https://autohotkey.com/docs/commands/_Persistent.htm

LOG("Beginning migration.")

; variables used in the program
AcctDept		:= NULL
created			:= NULL
element			:= NULL
line			:= NULL
strarray		:= NULL
transferred		:= NULL
type			:= NULL

; https://autohotkey.com/docs/commands/OnExit.htm
; register exit function
; OnExit("")

Loop, Read, csv.csv
{ ; line in file level
	; read, line-by-line, from the CSV file
	line := A_LoopReadLine
	; split the read line by commas (transforms to array)
	strarray := StrSplit(line, ",")

	; open a new IT Historical Data ticket
	OPENNEWTICKET()
	LOG("New ticket opened.")

	; insert data into variables to print
	created := strarray[1]					; date of creation
	AcctDept := strarray[2]					; which department? (i.e. requestor)
	transferred := strarray[3]			; was it sent to level 2?
	type := strarray[4]							; IT type (i.e. ticket tag)

	ACCT(AcctDept)
	Sleep, 100
	ITTYPE(type)
	Sleep, 100
	Send, {Tab}
	Sleep, 100
	Send, %created%
	Sleep, 100
	LVLTWO(transferred)
	Sleep, 1000
	LOG("Ticket filled out.")

	; commit changes
	SAVE()
	LOG("Ticket saved.")

	Sleep, 500
	; close ticket window
	Send, !{F4}
	; wait slightly before beginning next ticket
	Sleep, 500
} ; end of outer loop

LOG("Finished. Exiting.")

; terminate script
ExitApp

; This will open a new Historical IT Data ticket.
; THE BSC OPERATIONS APPLICATION MUST BE OPEN WITH
; A TITLE OF "Tickets"!!!!!
OPENNEWTICKET()
{
	; activate the window to create the tickets from
	WinActivate, Tickets
	; refresh the page to standardize where the tabs start
	Send, {F5}
	; wait
	Sleep, 2000
	; get to the "+ New" menu
	Send, {Tab 4}
	; briefer wait
	Sleep, 75
	; open the menu
	Send, {Enter}
	; briefer wait
	Sleep, 75
	; select "IT Historical Data" form
	Send, {Down 6}
	; briefer wait
	Sleep, 75
	; actually open the "IT Historical Data" form
	Send, {Enter}
	; wait for ticket to load
	Sleep, 1500
} ; end of OPENNEWTICKET()

; determine which new Acct/Dept (i.e. requestor) from the old requestors
; it will then enter the correct requestor
ACCT(oldType)
{
	; select which new Acct/Dept type to use
	if (InStr(oldType, "Admin/Staff Employee"))
	{
		Send, Unknown
	} else if (InStr(oldType, "Alumni/Former Student"))
	{
		Send, Alumni
	} else if (InStr(oldType, "BYU-Hawaii Student"))
	{
		Send, BYUH Student
	} else if (InStr(oldType, "Community Member"))
	{
		Send, Community Member
	} else if (InStr(oldType, "Concurrent Enrollment"))
	{
		Send, Concurrent Enrollment
	} else if (InStr(oldType, "LDSBC Student"))
	{
		Send, LDSBC Student
	} else if (InStr(oldType, "NM/Con Ed."))
	{ ; not in 2016 data
		Send, NonMatriculatedStudent
	} else if (InStr(oldType, "Off Track"))
	{
		Send, OffTrackStudent
	} else if (InStr(oldType, "On Campus Instructor"))
	{
		Send, Unknown
	} else if (InStr(oldType, "On Track"))
	{
		Send, OnTrackStudent
	} else if (InStr(oldType, "Online Instructor"))
	{
		Send, Online Instruction
	} else if (InStr(oldType, "Online Student"))
	{
		Send, OnlineStudent
	} else if (InStr(oldType, "Parent"))
	{
	; old requestor was "Parent/Other Relative",
	; but only "Parent" was found in 2016 data
		Send, Parent/Other Relative
	} else if (InStr(oldType, "Pathway Student"))
	{
		Send, Pathway Student
	} else if (InStr(oldType, "Prospective Student"))
	{
		Send, ProspectiveStudent
	} else if (InStr(oldType, "Spam"))
	{ ; not in 2016 data
		Send, Spam
	} else if (InStr(oldType, "Spouse"))
	{
		Send, Spouse
	} else if (InStr(oldType, "Other"))
	{
		Send, Other Personnel
	} ; end of conditional
	; wait for typing to finish
	Sleep, 1000
	; move to next field
	Send, {Tab 3}
} ; end of ACCT()

; determine if the ticket had been sent to level 2 or not
; it will then select the appropriate radio button
LVLTWO(trans)
{
	if (InStr(trans, "No"))
	{
		Send, {Tab}
		Sleep, 50
		Send, {Right}
	} else {
		Send, {Tab}
	} ; end of conditional
	Sleep, 50
	Send, {Space}
} ; end of LVLTWO()

; determine which new IT Type (i.e. ticket tag) from the old types
; it will then enter the correct type
ITTYPE(type)
{
	if (InStr(type, "SharePoint")
		|| InStr(type, "VDI"))
	{
		Send, Download (Microsoft/Adobe)
	} else if (InStr(type, "I-Learn BSC Closed")
		|| InStr(type, "I-Learn IT")
		|| InStr(type, "I-Learn Online"))
	{
		Send, I-Learn
	} else if (InStr(type, "I-Plan"))
	{
		Send, I-Plan
	} else if (InStr(type, "Identity Management"))
	{
		Send, Log-In/Password Issues
	} else if (InStr(type, "Network"))
	{
		Send, Wi-Fi
	} else if (InStr(type, "Application Support (TD/Equella/EMS")
		|| InStr(type, "BSC IT General Issues")
		|| InStr(type, "Classroom/Lab Support")
		|| InStr(type, "Desktop Support")
		|| InStr(type, "Messaging")
		|| InStr(type, "Phone")
		|| InStr(type, "FTC")
		|| InStr(type, "Server/Storage")
		|| InStr(type, "Software Engineering")
		|| InStr(type, "Web Content Issue"))
	{
		Send, Other
	} ; end of conditional
} ; end of ITTYPE()

; saves the completed ticket, committing the changes
; it does so by clicking on the "Save" button
SAVE()
{
	; debugging confirm to doublecheck ticket accuracy; remove when finished
	CONFIRM()
	; move mouse to "Save" button
	MouseMove, 50, 90
	; click on "Save" button to commit changes
	Click
} ; end of SAVE()

; this will save the ticket number to the log file
TICKETNUM()
{
	; select the address bar
	Send, !d
	; wait
	Sleep, 15
	; copy the URL
	Send, {Control down}c{Control up}

	; put URL in variable
	URL := Clipboard

	;debugging
	MsgBox, %Clipboard%`n%URL%

	; find TicketID string
	INDEX := InStr(URL, "TicketID=")
	; skip past to actual ID
	INDEX += 9

	; cut just ID
	ID := SubStr(URL, INDEX, 7)
	; log the ticket ID
	LOG("Ticket created with ID " . ID . ".")
} ; end of TICKETNUM()

LOG(MESSAGE)
{
	; logfile name (four-digit year, then two-digit month, then two-digit day)
	; all logs should go to the same file for a given day because of naming
	FormatTime, LOGFILENAME, , yyyyMMdd
	; formate time for actual logging
	; full name of day of week, abbreviated month, two-digit day, four-digit year
	; 24-hour, two-digit hour, two-digit minutes, two-digit seconds
	FormatTime, DATE, , dddd MMM dd yyyy HHmmss
	; append log to logfile
	FileAppend, %DATE%: %MESSAGE%`n, %LOGFILENAME%.log
} ; end of LOG()

; this is a debugging function to insert a confirm dialog before the ticket
; is actually committed
CONFIRM()
{
	MsgBox, 0x24, Please confirm, Continue with current ticket accuracy?
	IfMsgBox No
	{
		LOG("TICKET INACCURATE! Exiting.")
		ExitApp
	} ; end of MsgBox conditional
} ; end of CONFIRM()
