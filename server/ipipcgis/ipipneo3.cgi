#!/usr/local/bin/perl

require("cgi-lib.pl");

MAIN:
{
  # Read in identifying information
  &ReadParse(*input);

  # Print the header
  print &PrintHeader;
  print &HtmlTop ("IPIP-NEO-PI Items 121-180");

  # Extract identifying variables
  ($Sex = $input{'Sex'});
  ($Age = $input{'Age'});
  ($Nick = $input{'Nick'});
  ($Country = $input{'Country'});

  # Get the item responses
  ($Q[1] = $input{'Q1'});
  ($Q[2] = $input{'Q2'});
  ($Q[3] = $input{'Q3'});
  ($Q[4] = $input{'Q4'});
  ($Q[5] = $input{'Q5'});
  ($Q[6] = $input{'Q6'});
  ($Q[7] = $input{'Q7'});
  ($Q[8] = $input{'Q8'});
  ($Q[9] = $input{'Q9'});
  ($Q[10] = $input{'Q10'});
  ($Q[11] = $input{'Q11'});
  ($Q[12] = $input{'Q12'});
  ($Q[13] = $input{'Q13'});
  ($Q[14] = $input{'Q14'});
  ($Q[15] = $input{'Q15'});
  ($Q[16] = $input{'Q16'});
  ($Q[17] = $input{'Q17'});
  ($Q[18] = $input{'Q18'});
  ($Q[19] = $input{'Q19'});
  ($Q[20] = $input{'Q20'});
  ($Q[21] = $input{'Q21'});
  ($Q[22] = $input{'Q22'});
  ($Q[23] = $input{'Q23'});
  ($Q[24] = $input{'Q24'});
  ($Q[25] = $input{'Q25'});
  ($Q[26] = $input{'Q26'});
  ($Q[27] = $input{'Q27'});
  ($Q[28] = $input{'Q28'});
  ($Q[29] = $input{'Q29'});
  ($Q[30] = $input{'Q30'});
  ($Q[31] = $input{'Q31'});
  ($Q[32] = $input{'Q32'});
  ($Q[33] = $input{'Q33'});
  ($Q[34] = $input{'Q34'});
  ($Q[35] = $input{'Q35'});
  ($Q[36] = $input{'Q36'});
  ($Q[37] = $input{'Q37'});
  ($Q[38] = $input{'Q38'});
  ($Q[39] = $input{'Q39'});
  ($Q[40] = $input{'Q40'});
  ($Q[41] = $input{'Q41'});
  ($Q[42] = $input{'Q42'});
  ($Q[43] = $input{'Q43'});
  ($Q[44] = $input{'Q44'});
  ($Q[45] = $input{'Q45'});
  ($Q[46] = $input{'Q46'});
  ($Q[47] = $input{'Q47'});
  ($Q[48] = $input{'Q48'});
  ($Q[49] = $input{'Q49'});
  ($Q[50] = $input{'Q50'});
  ($Q[51] = $input{'Q51'});
  ($Q[52] = $input{'Q52'});
  ($Q[53] = $input{'Q53'});
  ($Q[54] = $input{'Q54'});
  ($Q[55] = $input{'Q55'});
  ($Q[56] = $input{'Q56'});
  ($Q[57] = $input{'Q57'});
  ($Q[58] = $input{'Q58'});
  ($Q[59] = $input{'Q59'});
  ($Q[60] = $input{'Q60'});
  ($Q[61] = $input{'Q61'});
  ($Q[62] = $input{'Q62'});
  ($Q[63] = $input{'Q63'});
  ($Q[64] = $input{'Q64'});
  ($Q[65] = $input{'Q65'});
  ($Q[66] = $input{'Q66'});
  ($Q[67] = $input{'Q67'});
  ($Q[68] = $input{'Q68'});
  ($Q[69] = $input{'Q69'});
  ($Q[70] = $input{'Q70'});
  ($Q[71] = $input{'Q71'});
  ($Q[72] = $input{'Q72'});
  ($Q[73] = $input{'Q73'});
  ($Q[74] = $input{'Q74'});
  ($Q[75] = $input{'Q75'});
  ($Q[76] = $input{'Q76'});
  ($Q[77] = $input{'Q77'});
  ($Q[78] = $input{'Q78'});
  ($Q[79] = $input{'Q79'});
  ($Q[80] = $input{'Q80'});
  ($Q[81] = $input{'Q81'});
  ($Q[82] = $input{'Q82'});
  ($Q[83] = $input{'Q83'});
  ($Q[84] = $input{'Q84'});
  ($Q[85] = $input{'Q85'});
  ($Q[86] = $input{'Q86'});
  ($Q[87] = $input{'Q87'});
  ($Q[88] = $input{'Q88'});
  ($Q[89] = $input{'Q89'});
  ($Q[90] = $input{'Q90'});
  ($Q[91] = $input{'Q91'});
  ($Q[92] = $input{'Q92'});
  ($Q[93] = $input{'Q93'});
  ($Q[94] = $input{'Q94'});
  ($Q[95] = $input{'Q95'});
  ($Q[96] = $input{'Q96'});
  ($Q[97] = $input{'Q97'});
  ($Q[98] = $input{'Q98'});
  ($Q[99] = $input{'Q99'});
  ($Q[100] = $input{'Q100'});
  ($Q[101] = $input{'Q101'});
  ($Q[102] = $input{'Q102'});
  ($Q[103] = $input{'Q103'});
  ($Q[104] = $input{'Q104'});
  ($Q[105] = $input{'Q105'});
  ($Q[106] = $input{'Q106'});
  ($Q[107] = $input{'Q107'});
  ($Q[108] = $input{'Q108'});
  ($Q[109] = $input{'Q109'});
  ($Q[110] = $input{'Q110'});
  ($Q[111] = $input{'Q111'});
  ($Q[112] = $input{'Q112'});
  ($Q[113] = $input{'Q113'});
  ($Q[114] = $input{'Q114'});
  ($Q[115] = $input{'Q115'});
  ($Q[116] = $input{'Q116'});
  ($Q[117] = $input{'Q117'});
  ($Q[118] = $input{'Q118'});
  ($Q[119] = $input{'Q119'});
  ($Q[120] = $input{'Q120'});

#HTML for items 121-180

  print <<ENDOFTEXT;

<form method=post action="ipipneo4.cgi">
ENDOFTEXT

  print "<input type=\"hidden\" name=\"Nick\" value=\"$Nick\">\n";
  print "<input type=\"hidden\" name=\"Sex\" value=\"$Sex\">\n";
  print "<input type=\"hidden\" name=\"Age\" value=\"$Age\">\n";
  print "<input type=\"hidden\" name=\"Country\" value=\"$Country\">\n";
  for ($i = 1; $i < 121; $i++) {
  print "<input type=\"hidden\" name=\"Q$i\" value=\"$Q[$i]\">\n";
}
  print <<ENDOFTEXT;
<table border><TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
121. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Get caught up in my problems.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q121" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q121" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q121" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q121" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q121" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
122. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Cheer people up.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q122" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q122" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q122" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q122" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q122" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
123. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Indulge in my fantasies.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q123" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q123" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q123" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q123" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q123" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
124. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Believe in human goodness.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q124" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q124" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q124" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q124" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q124" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
125. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Come up with good solutions.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q125" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q125" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q125" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q125" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q125" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
126. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Lose my temper.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q126" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q126" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q126" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q126" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q126" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
127. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Love surprise parties.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q127" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q127" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q127" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q127" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q127" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
128. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Enjoy the beauty of nature.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q128" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q128" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q128" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q128" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q128" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
129. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Know how to get around the rules.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q129" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q129" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q129" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q129" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q129" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
130. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Do things according to a plan.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q130" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q130" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q130" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q130" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q130" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
131. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Have frequent mood swings.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q131" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q131" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q131" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q131" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q131" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
132. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Take control of things.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q132" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q132" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q132" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q132" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q132" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
133. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Try to understand myself.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q133" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q133" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q133" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q133" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q133" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
134. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Have a good word for everyone.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q134" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q134" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q134" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q134" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q134" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
135. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Listen to my conscience.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q135" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q135" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q135" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q135" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q135" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
136. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Only feel comfortable with friends.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q136" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q136" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q136" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q136" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q136" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
137. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>React quickly.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q137" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q137" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q137" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q137" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q137" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
138. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Prefer to stick with things that I know.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q138" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q138" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q138" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q138" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q138" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
139. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Contradict others.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q139" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q139" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q139" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q139" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q139" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
140. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Do more than what's expected of me.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q140" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q140" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q140" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q140" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q140" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
141. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Love to eat.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q141" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q141" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q141" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q141" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q141" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
142. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Enjoy being reckless.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q142" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q142" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q142" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q142" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q142" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
143. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Enjoy thinking about things.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q143" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q143" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q143" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q143" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q143" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
144. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Believe that I am better than others.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q144" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q144" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q144" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q144" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q144" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
145. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Carry out my plans.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q145" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q145" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q145" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q145" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q145" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
146. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Get overwhelmed by emotions.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q146" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q146" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q146" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q146" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q146" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
147. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Love life.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q147" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q147" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q147" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q147" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q147" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
148. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Tend to vote for conservative political candidates.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q148" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q148" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q148" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q148" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q148" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
149. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Am not interested in other people's problems.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q149" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q149" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q149" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q149" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q149" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
150. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Make rash decisions.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q150" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q150" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q150" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q150" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q150" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
151. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Am not easily bothered by things.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q151" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q151" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q151" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q151" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q151" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
152. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Am hard to get to know.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q152" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q152" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q152" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q152" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q152" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
153. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Spend time reflecting on things.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q153" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q153" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q153" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q153" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q153" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
154. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Think that all will be well.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q154" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q154" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q154" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q154" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q154" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
155. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Know how to get things done.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q155" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q155" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q155" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q155" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q155" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
156. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Rarely get irritated.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q156" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q156" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q156" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q156" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q156" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
>157. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Prefer to be alone.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q157" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q157" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q157" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q157" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q157" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
158. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Do not like art.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q158" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q158" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q158" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q158" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q158" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
159. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Cheat to get ahead.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q159" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q159" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q159" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q159" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q159" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
160. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Often forget to put things back in their proper place.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q160" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q160" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q160" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q160" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q160" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
161. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Feel desperate.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q161" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q161" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q161" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q161" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q161" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
162. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Wait for others to lead the way.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q162" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q162" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q162" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q162" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q162" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
163. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Seldom get emotional.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q163" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q163" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q163" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q163" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q163" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
164. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Look down on others.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q164" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q164" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q164" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q164" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q164" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
165. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Break rules.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q165" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q165" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q165" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q165" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q165" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
166. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Stumble over my words.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q166" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q166" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q166" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q166" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q166" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
167. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Like to take it easy.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q167" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q167" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q167" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q167" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q167" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
168. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Dislike changes.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q168" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q168" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q168" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q168" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q168" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
169. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Love a good fight.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q169" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q169" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q169" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q169" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q169" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
170. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Set high standards for myself and others.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q170" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q170" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q170" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q170" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q170" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
171. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Rarely overindulge.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q171" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q171" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q171" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q171" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q171" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
172. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Act wild and crazy.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q172" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q172" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q172" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q172" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q172" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
173. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Am not interested in abstract ideas.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q173" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q173" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q173" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q173" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q173" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
174. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Think highly of myself.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q174" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q174" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q174" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q174" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q174" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
175. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Find it difficult to get down to work.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q175" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q175" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q175" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q175" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q175" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
176. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Remain calm under pressure.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q176" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q176" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q176" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q176" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q176" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
177. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Look at the bright side of life.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q177" VALUE="1"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q177" VALUE="2"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q177" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q177" VALUE="4"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q177" VALUE="5"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
178. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Believe that too much tax money goes to support artists.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q178" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q178" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q178" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q178" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q178" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
179. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Tend to dislike soft-hearted people.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q179" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q179" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q179" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q179" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q179" VALUE="1"></CENTER></TD>
</TR>
<TR><TD WIDTH="5%" VALIGN="TOP" HEIGHT=51>
180. </TD>
<TD WIDTH="28%" VALIGN="TOP" HEIGHT=51>
<P>Like to act on a whim.</TD>
<TD WIDTH="14%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q180" VALUE="5"></CENTER></TD>
<TD WIDTH="13%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q180" VALUE="4"></CENTER></TD>
<TD WIDTH="17%" VALIGN="TOP" HEIGHT=51>
<CENTER>Neither Accurate<BR>
nor Inaccurate<BR>
<INPUT TYPE="RADIO" NAME="Q180" VALUE="3"></CENTER></TD>
<TD WIDTH="12%" VALIGN="TOP" HEIGHT=51>
<CENTER>Moderately<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q180" VALUE="2"></CENTER></TD>
<TD WIDTH="11%" VALIGN="TOP" HEIGHT=51>
<CENTER>Very<BR>
Accurate<BR>
<INPUT TYPE="RADIO" NAME="Q180" VALUE="1"></CENTER></TD>
</TR>
</table>

<p><br><input type="submit" value="Send "><b>&nbsp;&nbsp;This 
will send your answers to be scored and take you to the next 60 questions.</b>
</form>
</body>
</html>
ENDOFTEXT
}
