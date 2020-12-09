{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "nodesparkle.cc", "winsparkle.h", "winsparkle-version.h" ],
      "libraries": [ "<(module_root_dir)/32/WinSparkle.lib" ],
    }
  ]
}