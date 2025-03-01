# Data files

This folder contains data files which are used to generate the content for some tables of the database.

The scripts in data/scripts/ may reference one or more of these files.

    data/
      datafiles/

        RTK Editions Compared.ods
          Originally by Chris aka Katsuo from the now retired RevTK Forums.
          
          The spreadsheet was updated for Kanji Koohii parsing with:
            - lesson 57 (RTK Volume 3)
            - lesson 58 (Newly Approved General-Use Kanji #3008-3030 for Old Ed. RTK1)
            - Old Edition lesson numbers (merged in from Ziggr's Heisig Kanji Index)

        RTK Editions Compared.csv
          This is the .ods file exported to .csv for parsing. See RtkParser.php

      generated/
      
        table_kanjis.csv
          Data file to be SOURCE´d straight into the Kanji Koohii database.
          Generated by data/scripts/kanjis_table.php (see the documentaton there).


## data/datafiles/download

Files that downloaded from various sources and saved in the `download` subfolder. These files tend to be very large (JMDICT, KANJIDIC, etc) so they are not included in the public repository.

If you need any of these files to run a script from the data/scripts/ folder, then download the file from the URL listed below, and name it as in the list below.
  
    data/
      datafiles/
        download/

          jmdict.xml.utf8
            Download JMdict_e.gz ("only English glosses") [from here](http://ftp.edrdg.org/pub/Nihongo/00INDEX.html#dic_fil)

          kanjidic2.xml
            Download the current version of kanjidic2.xml (.gz) [from here](https://www.edrdg.org/wiki/index.php/KANJIDIC_Project#Introduction)

          Unihan/
            Unihan_DictionaryIndices.txt
            Unihan_DictionaryLikeData.txt
            Unihan_IRGSources.txt
            Unihan_NumericValues.txt
            Unihan_OtherMappings.txt
            Unihan_RadicalStrokeCounts.txt
            Unihan_Readings.txt
            Unihan_Variants.txt

            Download Unihan.zip [from here](http://www.unicode.org/Public/UNIDATA/) (see [About the Unihan Database](http://unicode.org/charts/unihan.html))

## data/datafiles/generated

Output from scripts in data/scripts/ should go here.
